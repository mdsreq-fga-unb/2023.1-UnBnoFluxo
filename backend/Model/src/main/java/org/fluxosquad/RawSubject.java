package org.fluxosquad;

import java.util.List;

public class RawSubject extends Subject {

    private final List<Subject> requirements;

    public RawSubject(List<Subject> requirements, long hourGradeReward, String subjectCode, String description, List<String> unlocksSubjectsCodes, List<String> unlockedBySubjectsCodes) {
        super(hourGradeReward, subjectCode, description, unlocksSubjectsCodes, unlockedBySubjectsCodes);
        this.requirements = requirements;
    }

}