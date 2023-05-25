package org.fluxosquad.dao;

import org.fluxosquad.Subject;

import java.util.List;

public class Semestre {

    private final int numeroSemestre;
    private final List<Obrigatoria> obrigatorias;
    private final List<Optativa> optativas;
    private final List<Complementar> complementar;

    public Semestre(int numeroSemestre, List<Obrigatoria> obrigatorias, List<Optativa> optativas, List<Complementar> complementar){
        this.numeroSemestre = numeroSemestre;
        this.obrigatorias = obrigatorias;
        this.optativas = optativas;
        this.complementar = complementar;
    }

}