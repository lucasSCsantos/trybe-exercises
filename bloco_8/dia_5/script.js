// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite ninho', 'brigadeiro', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.table(fruitSalad(specialFruit, additionalItens));

const sum = (...args) => {
	let soma = 0;
	args.forEach((number) => {
		soma = soma + number
		return soma;	
	})
	return soma;
} 

console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15))

 