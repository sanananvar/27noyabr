// 6.1 tələbələr array-ində tələbələrin ortalaması ən yüksək olanı tapan proqram yazın

const students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
    { name: "Davud", scores: [100, 100, 100] }];

function HighGrade(students) {
    let max = 0;
    let name = "";
    for (let i = 0; i < students.length; i++) {
        let sum = 0;
        for (let j = 0; j < students[i].scores.length; j++) {
            sum += students[i].scores[j];

        }
        let average = sum / students[i].scores.length;
        if (average > max) {
            max = average;
            name = students[i].name;
        }
    }
    return name;
}

// console.log(HighGrade(students));


// 6.2 ortalaması 90-dan yuxarı olanları tapan proqram yazın

function HighGrade90(students) {
    let result = "";
    for (let i = 0; i < students.length; i++) {
        let sum = 0;
        for (let j = 0; j < students[i].scores.length; j++) {
            sum += students[i].scores[j];

        }
        let average = sum / students[i].scores.length;
        if (average > 90) {
            result += students[i].name;
        }
        
    }
    return result

}

console.log(HighGrade90(students))