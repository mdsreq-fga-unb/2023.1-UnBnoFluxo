package org.fluxosquad.dao;

public enum TipoCurso {

    SOFTWARE("Engenharia de Software"),AEROESPACIAL("Engenharia Aerospacial"),ELETRONICA("Engenharia Eletrônica"),ENERGIA
            ("Engenharia de Energia"),AUTOMOTIVA("Engenharia Automotiva");

    private final String nomeShow;

    TipoCurso(String nomeShow){
        this.nomeShow = nomeShow;
    }
}