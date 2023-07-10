package org.fluxosquad;

import org.fluxosquad.dao.Curso;
import org.fluxosquad.dao.Subject;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;

public class Scrapping {

    public static ThreadLocal<WebDriver> threadLocal = new InheritableThreadLocal<>();
    public static final Map<String, Curso> courses = new ConcurrentHashMap<>();
    public static final Collection<Future<?>> runnable = new CopyOnWriteArrayList<>();

    public static void page(ExecutorService service, String url, File f, String name){
        Future<?> callable = service.submit(() -> {
            WebDriver driver = threadLocal.get();
            if(driver == null){
                driver = new ChromeDriver();
                threadLocal.set(driver);
            }
            try {
                String pageContent = getPageContentWithSelenium(driver, url, name);
                writeToFile(f.getAbsolutePath(), pageContent);
                System.out.println(url);
            } catch (Exception exception){
                exception.printStackTrace();
                try {
                    Thread.sleep(50);
                    System.out.println("Failed, retrying...");
                    page(service, url, f, name);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
            return 0;
        });
        runnable.add(callable);
    }

    private static String getPageContentWithSelenium(WebDriver driver, String url, String name){
        // Open the URL in the browser
        driver.get(url);


        String code = getFieldText(driver, By.xpath("//th[text()='Código:']/following-sibling::td"));
        String nome = getFieldText(driver, By.xpath("//th[text()='Nome:']/following-sibling::td"));
        String preq = getFieldText(driver, By.xpath("//th[text()='Pré-Requisitos:']/following-sibling::td"));
        String coq = getFieldText(driver, By.xpath("//th[text()='Co-Requisitos:']/following-sibling::td"));
        WebElement formTable;
        try {
            formTable = driver.findElement(By.id("form:listaCurriculosComponente"));
        } catch (Exception exception){
            return "";
        }
        List<WebElement> rows = formTable.findElements(By.xpath(".//tr"));
        Map<Integer, String> sellId = new HashMap<>();
        sellId.put(1, "year");
        sellId.put(2, "name");
        sellId.put(3, "OBRIGATORIO");
        sellId.put(4, "period");
        for (WebElement row : rows){
            List<WebElement> cells = row.findElements(By.xpath(".//td"));
            if(cells.size() == 0){
                continue;
            }
            int r = 0;
            Map<Integer,String> cellValues = new HashMap<>();
            if (!cells.get(2).getText().contains("ENGENHARIA")){
                continue;
            }
            for (WebElement cell : cells){
                if(sellId.get(r) != null){
                    String cellText = cell.getText().trim();
                    cellValues.put(r, cellText);
                }
                r++;
            }
            //public Subject(String code, String displayName, String nature, int period, String workloud){
            String nature = cellValues.get(3);
            if(nature.contains("Sim")){
                nature = "OBRIGATORIO";
            } else {
                nature = "OPTATIVO";
            }
            if(nome.contains("COMPLEMENTAR")){
                nature = "COMPLEMENTAR";
            }
            Subject subject = new Subject(code, nome, nature, Integer.parseInt(cellValues.get(4)), name.replace("h","").replace(" ",""));
            String courseName = cellValues.get(2) + cellValues.get(1) ;
            String endpoint = courseName.replace(" ","") + cellValues.get(1);
            Curso curso = courses.computeIfAbsent(courseName, s -> new Curso(courseName, 10, endpoint, ""));
            if(curso.getSubjects().stream().anyMatch(s->s.getCode().equals(code) && s.update(code, subject.getPeriod()))) continue;
            subject.getPreRequisite().addAll(getAllComponents(preq));
            subject.getCoRequisite().addAll(getAllComponents(coq));
            curso.getSubjects().add(subject);
        }
        // Get the page source (HTML content)
        return "";
    }

    private static String getFieldText(WebDriver driver, By locator) {
        WebElement fieldElement = driver.findElement(locator);
        return fieldElement.getText().trim();
    }

    public static List<String> getAllComponents(String text){
        List<String> array = new LinkedList<>();
        for (String materia : text.split(" ")){
            if(materia.length() > 2){
                array.add(materia);
            }
        }
        return array;
    }

    private static void writeToFile(String filePath, String content) throws IOException {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
            writer.write(content);
        }
    }


}