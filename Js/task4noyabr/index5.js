
// Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin. (custom yaz)

let arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];

function MinMax(arr) {
    let maxCut = -Infinity;
    let minTek = Infinity;
    let maxIndex, minIndex;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (arr[i] > maxCut) {
                maxCut = arr[i];
                maxIndex = i;
            }
        } else {
            if (arr[i] < minTek) {
                minTek = arr[i];
                minIndex = i;
            }
        }
    }

    arr[maxIndex] = minTek;
    arr[minIndex] = maxCut;


    return arr;
}

console.log(MinMax(arr));


