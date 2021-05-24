const { encode, decode } = require('./challenges');

describe('Testa as funções encode e decode', () => {
	describe('Testa aa função encode', () => {
		it('Confere se encode é definida', () => {
			expect(encode).toBeDefined();
		});
		it('Confere se encode é função', () => {
			expect(typeof encode).toBe('function');
		});
		it('Confere se lucas vira l5c1s', () => {
			expect(encode('lucas')).toEqual('l5c1s');
		});
		it('Confere se abcdea vira 1bcd21', () => {
			expect(encode('abcdea')).toEqual('1bcd21');
		});
		it('Confere se jesus vira j2s5s', () => {
			expect(encode('jesus')).toEqual('j2s5s');
		});
		it('Confere se origamid vira abcdea', () => {
			expect(encode('origamid')).toEqual('4r3g1m3d');
		});
	})
	describe('Testa aa função decode', () => {
		it('Confere se encode é definida', () => {
			expect(decode).toBeDefined();
		});
		it('Confere se encode é função', () => {
			expect(typeof decode).toBe('function');
		});
		it('Confere se lucas vira l5c1s', () => {
			expect(decode('l5c1s')).toEqual('lucas');
		});
		it('Confere se abcdea vira 1bcd21', () => {
			expect(decode('1bcd21')).toEqual('abcdea');
		});
		it('Confere se jesus vira j2s5s', () => {
			expect(decode('j2s5s')).toEqual('jesus');
		});
		it('Confere se origamid vira abcdea', () => {
			expect(decode('4r3g1m3d')).toEqual('origamid');
		});
	})
})