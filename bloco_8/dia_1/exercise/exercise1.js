const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drummond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const objectEmploye = (string) => {
	const email = string.toLowerCase().split(' ').join('_');
	const employe = {
		string,
		email: `${email}@trybe.com`,
	}
	return employe;
}

console.log(newEmployees(objectEmploye));