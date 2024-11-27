function FindEven(arr) {
    let isAllOdd = true; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { 
            isAllOdd = false;
            break; 
        }
    }

    return isAllOdd;
}


console.log(FindEven([10]));     
