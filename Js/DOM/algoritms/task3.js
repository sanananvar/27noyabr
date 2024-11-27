function bolenler(arr,nums) {

    for (let i = 0; i < arr.length; i++) {
        if(nums%arr[i]!==0){
            return false
        }        
    }

    return true
    
}

console.log(bolenler([arr],nums))

