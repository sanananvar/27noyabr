// 1. Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.


let ucededlireqem = []

function reqem(ucededlireqem) {
    let cem = 0
    let hasil = 1
    let count =0
    let ededorta
    for (let i = 0; i < ucededlireqem.length; i++) {
        count==ucededlireqem.length
        if (ucededlireqem[i] == 0) {
            console.log("duzgun reqem deyil")
        }
        else {
            cem += ucededlireqem[i]
            hasil *= ucededlireqem[i]
            ededorta=cem/ucededlireqem.length
        }
        
    }
    console.log(cem);
    console.log(hasil)
    console.log(ededorta)
}

reqem(Array.from(String(234), Number))
