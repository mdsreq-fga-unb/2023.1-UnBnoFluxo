package org.fluxosquad;

import com.google.gson.Gson;
import com.sun.net.httpserver.HttpsConfigurator;
import com.sun.net.httpserver.HttpsParameters;
import com.sun.net.httpserver.HttpsServer;
import org.fluxosquad.dao.Curso;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.SSLContext;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.security.*;
import java.security.cert.CertificateException;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Server {

    public void start(List<Curso> cursos) {
        Thread thread = new Thread(() -> {
            try {
                String password = "test";
                // Load the keystore
                KeyStore keyStore = KeyStore.getInstance("JKS");
                FileInputStream keyStoreFile = new FileInputStream("keystore.p12");
                keyStore.load(keyStoreFile, password.toCharArray());

                // Create the SSL context
                KeyManagerFactory kmf = KeyManagerFactory.getInstance("SunX509");
                kmf.init(keyStore, password.toCharArray());

                SSLContext sslContext = SSLContext.getInstance("TLS");
                sslContext.init(kmf.getKeyManagers(), null, null);

                // Create the HttpsServer
                HttpsServer server = HttpsServer.create(new InetSocketAddress(443), 0);
                server.setHttpsConfigurator(new HttpsConfigurator(sslContext) {
                    public void configure(HttpsParameters params) {
                        params.setProtocols(new String[] { "HTTP/1.1", "HTTP/2" });
                        super.configure(params);
                    }
                });
                int numThreads = Runtime.getRuntime().availableProcessors();
                ExecutorService executor = Executors.newFixedThreadPool(numThreads);
                server.setExecutor(executor);
                for (Curso curso : cursos){
                    server.createContext("/api/course/"+curso.getEndpoint(), (exchange -> {
                        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
                        exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
                        exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type, Authorization");
                        // get course specific subjects.
                        System.out.println(exchange.getRemoteAddress().getHostName() + " " + exchange.getRemoteAddress().getPort() + " request ");
                        if ("GET".equals(exchange.getRequestMethod())){
                            String myJSON = curso.getAllSubjects();

                            exchange.sendResponseHeaders(200, myJSON.getBytes(StandardCharsets.UTF_8).length);
                            OutputStream output = exchange.getResponseBody();
                            output.write(myJSON.getBytes(StandardCharsets.UTF_8));
                            output.flush();
                        } else {
                            exchange.sendResponseHeaders(405, -1);// 405 Method Not Allowed
                        }
                        exchange.close();
                    }));
                }
                String courseResponse = new Gson().toJson(cursos);
                System.out.println("basic pattern for courses " + courseResponse);
                server.createContext("/api/courses", (exchange -> {
                    exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
                    exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
                    exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type, Authorization");
                    System.out.println(exchange.getRemoteAddress().getHostName() + " " + exchange.getRemoteAddress().getPort() + " request ");
                    if ("GET".equals(exchange.getRequestMethod())){
                        exchange.sendResponseHeaders(200, courseResponse.getBytes().length);
                        OutputStream output = exchange.getResponseBody();
                        output.write(courseResponse.getBytes());
                        output.flush();
                    } else {
                        exchange.sendResponseHeaders(405, -1);// 405 Method Not Allowed
                    }
                    exchange.close();
                }));
                server.start();
            } catch (IOException | UnrecoverableKeyException | CertificateException | KeyStoreException |
                     NoSuchAlgorithmException | KeyManagementException e) {
                throw new RuntimeException(e);
            }
        });
        thread.setDaemon(false);
        thread.start();

    }

    private static void disableSSLCertificateChecks() {
        // Disable SSL certificate checks
        HttpsURLConnection.setDefaultHostnameVerifier((hostname, sslSession) -> true);
        javax.net.ssl.HttpsURLConnection.setDefaultHostnameVerifier(
                (String hostname, javax.net.ssl.SSLSession sslSession) -> true);

        try {
            javax.net.ssl.TrustManager[] trustAllCerts = new javax.net.ssl.TrustManager[]{
                    new javax.net.ssl.X509TrustManager() {
                        public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                            return null;
                        }

                        public void checkClientTrusted(
                                java.security.cert.X509Certificate[] certs, String authType) {
                        }

                        public void checkServerTrusted(
                                java.security.cert.X509Certificate[] certs, String authType) {
                        }
                    }
            };

            javax.net.ssl.SSLContext sc = javax.net.ssl.SSLContext.getInstance("TLS");
            sc.init(null, trustAllCerts, new java.security.SecureRandom());
            javax.net.ssl.HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}