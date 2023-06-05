package org.fluxosquad;

import lombok.Data;

import java.util.List;

@Data
public class Subject {

    //Tipo: Obrigatório, optativa e modulo lívre
    //Código: Sempre inicia com 3 letras seguido de 4 números.
    //Carga horária: apenas um número inteiro.

    private final long hourGradeReward;
    private final String subjectCode;
    private final String description;
    private final List<String> unlocksSubjectsCodes;
    private final List<String> unlockedBySubjectsCodes;

    public Subject(long hourGradeReward, String subjectCode, String description, List<String> unlocksSubjectsCodes, List<String> unlockedBySubjectsCodes) {
        this.hourGradeReward = hourGradeReward;
        this.subjectCode = subjectCode;
        this.description = description;
        this.unlocksSubjectsCodes = unlocksSubjectsCodes;
        this.unlockedBySubjectsCodes = unlockedBySubjectsCodes;
    }

}