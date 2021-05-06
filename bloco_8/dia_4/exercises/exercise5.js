
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const nomesNew = names.map((name) => name.split('').filter((letter) => letter === 'a' || letter === 'A'))
	const lettersA = nomesNew.reduce((accumulator, letterA) => accumulator.concat(letterA), []);
	return lettersA.length
}

assert.deepStrictEqual(containsA(), 20);