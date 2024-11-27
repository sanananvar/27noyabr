function findVowels(sentence) {
    const vowels = "aıoueəiöü";
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i].toLowerCase();

        for (let j = 0; j < vowels.length; j++) {
            if (char === vowels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}
console.log(findVowels(sentence));
