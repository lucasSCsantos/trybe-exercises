console.log('async');
console.log('async');
console.log('async');
console.log('async');


const promise = new Promise((resolve, reject) => {
	const array = [];
	for(index = 0; index < 10; index += 1){
		array.push(Math.round(Math.random() * 49) + 1);
	}
	
	const accumulator = array.reduce((accumulator, number) => {
		return accumulator + Math.pow(number,2);
	}, Math.pow(array[0],2))

	if(accumulator < 8000){
		const divs = [2, 3, 5, 10];
		const divided = divs.map((number) => accumulator / number)
		return resolve(console.log(`resolvido ${divided}`))
	}
	return reject(console.log(`rejeitado ${accumulator}`));
})
