const sorteio = (number, action) => {
	const randomNumber = Math.floor(Math.random() * 6);
	const chosenNumber = number;
	return action(chosenNumber, randomNumber);
}

const checkNumber = (numero, result) => {
	if (numero === result) {
		return 'Parabens Voce Ganhou';
	} 
		return 'Tente Novamente';
}

console.log(sorteio(5,checkNumber));