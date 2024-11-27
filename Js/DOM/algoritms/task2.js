function ededorta(arr) {
    let count=0

    for (let i = 0; i < arr.length; i++) {
        count +=arr[i]
    }

    let avarage = count/arr.length

    return Math.round(avarage)
}

console.log(ededorta([10,16,20,23]))