const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (array) => {
	const middle = Math.floor((array.length / 2))
	const middleWord = [array[middle]];
	array.splice(middle, 1);
	return middleWord;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);