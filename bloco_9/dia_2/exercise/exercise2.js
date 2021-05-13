const promise = new Promise((resolve, reject) => {
	const array = [];
	for(index = 0; index < 10; index += 1){
		array.push(Math.round(Math.random() * 50))
	}
})