function printPrime(number) {
	var max = 1000;
	if (number < max) {
		var isPrime = true;
		for (var divider = 2; divider < max && divider < number; divider++) {
			if (number % divider === 0) {
				isPrime = false;
				break
			}
		}
		if (isPrime) {
            console.log(number + ' is a prime number');
        } else { 
            console.log(number + ' is not a prime number');
        }
	}
	else {
		console.log('Wrong number');
	}
}

printPrime (627);