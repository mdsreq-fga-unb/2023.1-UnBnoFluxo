package org.fluxosquad;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Client {

    public void testRequest(){
        try {
            URL url = new URL("http://localhost:25532/api/courses"); // Replace with the actual server URL

            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String line;
                StringBuilder response = new StringBuilder();
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                reader.close();

                System.out.println("Response:");
                System.out.println(response);
            } else {
                System.out.println("Request failed with response code: " + responseCode);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}