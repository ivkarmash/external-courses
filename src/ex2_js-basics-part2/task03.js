function countNumbers (array) {
    var evenCount = 0;
    var oddCount = 0;
    var zeroCount = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] === 0) {
            zeroCount++;
            continue;
        }
        var x = array[i] % 2;
        if (x === 0) {
            evenCount++;
        } else if (x === 1) {
            oddCount++;
        } 
    }
    console.log('Четных чисел: ' + evenCount);
    console.log('Нечетных чисел:' + oddCount);
    console.log('Нулей: ' + zeroCount);
}

countNumbers ([2,5,20,0,12,0,2345,245,23,3,3,90]);