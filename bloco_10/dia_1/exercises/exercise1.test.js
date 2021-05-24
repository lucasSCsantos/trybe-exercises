const sum = require('./exercise1')

test('sum é a soma de dois numeros', () => {
		expect(sum(2,3)).toBe(5);
});

test('sum de 4 e 5 da nove', () => {
	expect(sum(4,5)).toEqual(9);
});

test('trhwo error', () => {
	expect(() => {
		sum(4, '5');
	}).toThrow();
});