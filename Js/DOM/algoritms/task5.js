function findBigNumber(arr, num) {
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= num && arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findBigNumber([arr], num));
