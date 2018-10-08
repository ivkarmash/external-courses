function sameNumbersArr (array) {
    var areEqual = true;
    var max = array.length - 1;
    for (var i = 0; i < max; i++) {
        if (array[i] !== array[i+1]) {
            areEqual = false;
            break;
        }
    }
    if (areEqual) {
        console.log('true');
    } else {
        console.log('false');
    }
}

sameNumbersArr ([3,3,3]);