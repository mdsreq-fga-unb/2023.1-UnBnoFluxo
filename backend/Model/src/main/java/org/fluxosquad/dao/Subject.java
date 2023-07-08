package org.fluxosquad.dao;

import java.util.LinkedList;
import java.util.List;

public class Subject {

    private final String code;
    private final String displayName;
    private final String nature;
    private final String alias;
    private String workloud = "";
    private final List<String> preRequisite = new LinkedList<>();
    private final List<String> coRequisite = new LinkedList<>();
    private int period;

    public Subject(String code, String displayName, String nature, int period, String workloud){
        this.code = code;
        this.displayName = displayName;
        this.workloud = workloud;
        this.nature = nature;
        this.period = period;
        this.alias = "";
    }

    public Subject(String code, String displayName, String nature, int period){
        this.code = code;
        this.displayName = displayName;
        this.nature = nature;
        this.period = period;
        StringBuilder stringBuilder = new StringBuilder();
        for (String s : displayName.split(" ")){
            try {
                if(s.length() <= 1){
                    continue;
                }
                stringBuilder.append(s.charAt(0));
            } catch (Exception ignored){

            }
        }
        this.alias = stringBuilder.toString();
    }

    public String getCode() {
        return code;
    }

    public List<String> getPreRequisite() {
        return preRequisite;
    }

    public List<String> getCoRequisite() {
        return coRequisite;
    }

    public int getPeriod() {
        return period;
    }

    public boolean update(String code, int period){
        if(code.equals(this.code)){
            this.period = period;
            return true;
        }
        return false;
    }

}