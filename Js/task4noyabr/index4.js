
// 4. const fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"]  array daxilindəki ən uzun sözü tapan alqoritm yazın
const fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"]
function Bigword(fruits) {
    let max = 0
    let maxword = ""
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].length > max) {
            max = fruits[i].length
            maxword = fruits[i]

        }
    }

    return maxword
    
}

console.log(Bigword(fruits))