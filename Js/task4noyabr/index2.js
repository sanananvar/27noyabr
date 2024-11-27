// 2. Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.



function bolenlerinsayi(eded) {
    let say=0
    for (let i = 0; i < eded; i++) {
        
        if(eded%i==0){
            say++
        }
    }
    return say
    
}

console.log(bolenlerinsayi(200))