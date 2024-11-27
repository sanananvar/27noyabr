function checkDivisibleBySeven(num) {
    if (num % 7 === 0) {
        console.log("7-yə bölünür");
    } else {
        let remainder = num % 7;
        let nextMultiple = num + (7 - remainder);
        console.log(nextMultiple);
    }
}

checkDivisibleBySeven(num);

