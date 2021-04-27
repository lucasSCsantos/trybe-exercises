
const fatorial = number => number === 0 ? 1 : number * fatorial(number - 1);

console.log(fatorial(10));

const godSignature = number => {
	if (number === 1){
		return 1;
	} else if (number === 2) {
		return 1;
	} else {
		return godSignature(number - 1) + godSignature(number - 2);
	}
}

console.log(godSignature(10))

const triangle = number => {
	if (number === 1) {
		return 1
	} else {
		return triangle(number - 1) + number;
	}
}

console.log(triangle(5))