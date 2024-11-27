function calculateFinalGrade(grade, activitiesCount) {
    let bonus = 0;

    if (grade >= 85 && activitiesCount > 3) {
        bonus = 5;
    } else if (grade >= 70 && grade < 85 && activitiesCount >= 2) {
        bonus = 3;
    } else if (grade >= 60 && grade < 70 && activitiesCount >= 1) {
        bonus = 2;
    }

    let finalGrade = grade + bonus;

    if (finalGrade > 100) {
        finalGrade = 100;
    }

    return finalGrade;
}

console.log(calculateFinalGrade(90, 4));