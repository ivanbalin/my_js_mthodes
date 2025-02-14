function myIncludes(arr, item, from = 0){
    let result = false

    for (i = from; i < arr.length; i++){
        if (item === arr[i]){
            result = true
            break
        } 
    }

    return result
}

// console.log(myIncludes([1, 0, false], false));
