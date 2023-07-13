package org.fluxosquad.dao;

import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class Curso {

    private final String name;
    private final int maxPeriod;
    private final String endpoint;
    private String allSubjects;
    private final List<Subject> subjects = new CopyOnWriteArrayList<>();

    public String getAllSubjects() {
        return allSubjects;
    }

    public Curso(String name, int maxPeriod, String endpoint, String allSubjects) {
        this.name = name;
        this.maxPeriod = maxPeriod;
        this.endpoint = endpoint;
        this.allSubjects = allSubjects;
    }

    public int getMaxPeriod() {
        return maxPeriod;
    }

    public void setAllSubjects(String allSubjects) {
        this.allSubjects = allSubjects;
    }

    public String getEndpoint() {
        return endpoint;
    }

    public String getName() {
        return name;
    }

    public List<Subject> getSubjects() {
        return subjects;
    }
}