package org.fluxosquad;

import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class Server {

    public void start(){
        Thread thread = new Thread(()->{
            HttpServer server;
            try {
                server = HttpServer.create(new InetSocketAddress(8080), 0);
                server.createContext("/get", (exchange -> {
                    System.out.println(exchange.getRemoteAddress().getHostName() + " " + exchange.getRemoteAddress().getPort() + " request ");
                    if ("GET".equals(exchange.getRequestMethod())) {
                        String responseText = "[{\"name\":\"ABCDEFGHIJ\",\"period\":1,\"code\":\"FGA1284\"},{\"name\":\"C1\",\"period\":1,\"code\":\"FGA1234\"},{\"name\":\"APC\",\"period\":1,\"code\":\"FGA1884\"},{\"name\":\"DIAC\",\"period\":1,\"code\":\"FGA1834\"},{\"name\":\"IE\",\"period\":1,\"code\":\"FGA1934\"},{\"name\":\"EA\",\"period\":1,\"code\":\"FGA3364\"},{\"name\":\"C2\",\"period\":2,\"code\":\"FGA9934\"},{\"name\":\"Metodos\",\"period\":3,\"code\":\"FGA1144\"},{\"name\":\"GPQ\",\"period\":4,\"code\":\"FGA1154\"},{\"name\":\"IHC\",\"period\":5,\"code\":\"FGA1524\"},{\"name\":\"QS\",\"period\":6,\"code\":\"FGA7774\"},{\"name\":\"TESTES\",\"period\":6,\"code\":\"FGA7454\"},{\"name\":\"ADS\",\"period\":6,\"code\":\"FGA7594\"},{\"name\":\"TPPE\",\"period\":7,\"code\":\"FG5724\"},{\"name\":\"EPS\",\"period\":8,\"code\":\"FGA1574\"},{\"name\":\"Felicidade\",\"period\":0,\"code\":\"FGA5724\"},{\"name\":\"Terapia\",\"period\":0,\"code\":\"FGA1554\"}]\n";
                        exchange.sendResponseHeaders(200, responseText.getBytes().length);
                        OutputStream output = exchange.getResponseBody();
                        output.write(responseText.getBytes());
                        output.flush();
                    } else {
                        exchange.sendResponseHeaders(405, -1);// 405 Method Not Allowed
                    }
                    exchange.close();
                }));


                server.setExecutor(null); // creates a default executor
                server.start();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
        thread.setDaemon(true);
        thread.start();

    }

}