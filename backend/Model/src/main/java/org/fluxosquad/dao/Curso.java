package org.fluxosquad.dao;

import java.util.List;

public class Curso {

    private final List<Semestre> periodList;
    private final TipoCurso tipoCurso;
    private final List<Obrigatoria> obrigatorias;
    private final List<Optativa> optativas;

    public Curso(TipoCurso tipoCurso, List<Semestre> periodList, List<Obrigatoria> obrigatorias, List<Optativa> optativas){
        this.tipoCurso = tipoCurso;
        this.periodList = periodList;
        this.obrigatorias = obrigatorias;
        this.optativas = optativas;
    }

}