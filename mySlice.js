function mySlice(arr, start = 0, end = arr.length) {
    // Обработка отрицательных индексов
    if (start < 0) {
        start += arr.length;
    }
    if (end < 0) {
        end += arr.length;
    }
    
    const result = [];
    
    for (let i = start; i < end && i < arr.length; ++i) {
        result.push(arr[i]);
    }
    
    return result;
}

// console.log(mySlice(["t", "e", "s", "t"], 1, 3));
// console.log(mySlice(["t", "e", "s", "t"], -2));
