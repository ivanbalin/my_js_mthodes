function myIndexOf(arr, item, from = 0){
    let result = -1

    for (i = from; i < arr.length; i++){
        if (item === arr[i]){
            result = i
            break
        } 
    }

    return result
}

// console.log(myIndexOf([1, 0, false], 0));
// console.log(myIndexOf([1, 0, false], false));
