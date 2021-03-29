let name = 'Milton';
let lastName = 'Nascimento';
let nickname = 'Bituca';
let age = 77;
let bestAlbuns = ['Travessia', 'Clube da Esquina', 'Minas'];

let singer = {
	name: 'Milton',
	lastName: 'Nascimento',
	nickname: 'Bituca',
	age: 77,
	bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
	bornInfo: {
		city: 'Rio de Janeiro',
		state: 'Rio de Janeiro'
	}
};

console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.')

console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.')

singer['fullName'] = singer.name + ' ' + singer.lastName;

console.log(singer)

console.log('O cantor ' + singer.fullName + ' nasceu no ' + singer.bornInfo.city)