package org.fluxosquad;

import java.util.List;

public class RawSubject extends Subject {

    private final List<Subject> requirements;

    public RawSubject(List<Subject> requirements) {
        super(hourGradeReward, subjectCode, description, unlocksSubjectsCodes, unlockedBySubjectsCodes);
        this.requirements = requirements;
    }

}