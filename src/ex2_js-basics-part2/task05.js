function printMax(numbers){
    var max;
    for (var i = 0, max = numbers.length; i < max; i++){
    if(numbers[i] > max || max === undefined){
        max = numbers[i];
     }
    }
    console.log(max)
}
printMax([3,5,10,2]);