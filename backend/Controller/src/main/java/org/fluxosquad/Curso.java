package org.fluxosquad;

public class Curso {

    private final String name;
    private final int maxPeriod;
    private final String endpoint;
    private final String allSubjects;

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

    public String getEndpoint() {
        return endpoint;
    }

    public String getName() {
        return name;
    }


}
