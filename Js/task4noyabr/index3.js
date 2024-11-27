
// 3.1 sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;

function bosluqlarSayi(sampleNews) {

    let spacecount = 0

    for (let i = 0; i < sampleNews.length; i++) {
        if (sampleNews[i] == " ") {
            spacecount++;
        }

    }
    return spacecount

}

console.log(bosluqlarSayi(sampleNews))

// 3.2 sampleNews mətnində olan vergül və nöqtələrin sayını təyin edən proqram yazın.

function noqtevergul(sampleNews) {

    let vergulcount = 0
    let noqtecount = 0

    for (let i = 0; i < sampleNews.length; i++) {
        if (sampleNews[i] == ",") {
            vergulcount++
        } else if (sampleNews[i] == ".") {
            noqtecount++
        }
    }
    return [vergulcount, noqtecount]

}

console.log(noqtevergul(sampleNews))

// 3.3 sampleNews mətnində neçə hərf olduğunu tapan proqram yazın(vergül ve boşluqlar nezere alınmasın.)

function herflerinsayi(sampleNews) {

    let herfsayi = 0

    for (let i = 0; i < sampleNews.length; i++) {

        if (sampleNews[i] != " " && sampleNews[i] != "," && sampleNews) {
            herfsayi++
        }

    }
    return herfsayi

}

console.log(herflerinsayi(sampleNews));

// 3.4 sampleNews mətnində neçə söz olduğunu tapan proqram yazın.

function wordcount(sampleNews) {

    let Wcount = sampleNews.split(/\s+/)

    return Wcount.length
}

console.log(wordcount(sampleNews))

// qismen dogru yanasma
// function wordcount(sampleNews) {

//     let Wcount=0

//     for (let i = 0; i < sampleNews.length; i++) {
//         if(sampleNews[i]==" "){
//             Wcount++
//         }
//     }
//     return Wcount
// }

// console.log(wordcount(sampleNews))
// 





