package org.fluxosquad;

import java.util.Scanner;

public class Main {

    public static void main(String[] args){
        System.out.println("Init controller = RestAPI.");
        Server server = new Server();
        Thread thread = new Thread(()->{
            try(Scanner scanner = new Scanner(System.in)) {
                while (true) {
                    String line = scanner.nextLine();
                    System.out.println(line);
                }
            }

        });
        thread.setPriority(Thread.MIN_PRIORITY);
        thread.setDaemon(true);
        thread.start();
        server.start();
        Client client = new Client();
        client.testRequest();
    }

}