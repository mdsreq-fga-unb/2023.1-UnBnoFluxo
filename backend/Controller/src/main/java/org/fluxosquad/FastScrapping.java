package org.fluxosquad;

import com.google.gson.Gson;
import org.fluxosquad.dao.Curso;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.fluxosquad.Scrapping.*;

public class FastScrapping {

    public static void main(String[] args) {
        // Your big text containing multiple sections
        String bigText = new Scanner(System.in).nextLine();

        Document document = Jsoup.parse(bigText.replace("\\t","").replace("\\n",""));

        // Find the desired <tr> elements
        Elements trElements = document.select("tr");
        List<Element> componentTrElements = new ArrayList<>();

        // Filter the <tr> elements to find those with the class "componentes"
        Map<String, String> nameComponentsIds = new HashMap<>();
        for (Element trElement : trElements) {
            if (String.valueOf(trElement).contains("componentes") && !String.valueOf(trElement).contains("CADEIA ")) {
                Elements groupElements = trElement.select("td");
                if (groupElements.size() >= 3){
                    String name = groupElements.get(0).text();

                    String section = String.valueOf(groupElements.get(2));
                    System.out.println("section: " + section);
                    nameComponentsIds.put(name, section);
                }
                if (trElement.hasClass("component")) {
                    componentTrElements.add(trElement);
                }
            }
        }
        ExecutorService service = Executors.newFixedThreadPool(12);


        // >> here is the path of the folder you want outputs on your PC, ignore this for now, later this will become a full page of subject processing.
        File file = new File("C:/Users/pagan/Desktop/unb");

        Pattern pattern = Pattern.compile("'idcomponente':'(\\d+)'");
        System.out.println(nameComponentsIds.size());

        // get this file from the discord.
        System.setProperty("webdriver.chrome.driver","C:/Users/pagan/Desktop/driver/chromedriver.exe");

        for (Map.Entry<String, String> stringStringEntry : nameComponentsIds.entrySet()){
            String name = stringStringEntry.getKey();
            Matcher matcher = pattern.matcher(stringStringEntry.getValue());

            String[] gradeData = name.split(" - ");
            String hour = gradeData[gradeData.length-1].replace(" h","").replace(".","");
            System.out.println(hour);
            while (matcher.find()){
                String text = matcher.group(1);
                String url = "https://sigaa.unb.br/sigaa/link/public/ensino/visualizarComponente/"+text;
                System.out.println(name + " " + url);
                File f = new File(file, text+".html");
                try {
                    f.delete();
                    f.createNewFile();
                    // open url, get the body of hte page, write to the file variable: f
                    page(service, url, f, hour);
                } catch (IOException e){
                }
            }
        }
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e){
            throw new RuntimeException(e);
        }
        for (Future future : runnable){
            try {
                future.get();
            } catch (InterruptedException | ExecutionException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println("Finished google search.");
        for (Map.Entry<String, Curso> cursoEntry : courses.entrySet()){
            if (cursoEntry.getValue().getName().contains("AERO")){
                System.out.println("Course:" + cursoEntry.getKey());
                System.out.println("SubjectSize: " + cursoEntry.getValue().getSubjects().size());
                System.out.println(new Gson().toJson(cursoEntry.getValue().getSubjects()));
            }
        }

    }

}