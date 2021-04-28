const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = {};

Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);

const calculateStudentNumber  = objeto => {
	let totalNumber = 0;
	for (const index in objeto){
		totalNumber = totalNumber + objeto[index].numeroEstudantes;
	}
	return totalNumber;
}

console.log(calculateStudentNumber(allLessons));

const getValueByName = (name, index) => Object.values(name)[index];


console.log(getValueByName(lesson2, 0))

const verifyEntries = (name, key, value) => {
	const entries = Object.entries(name);
	console.log(entries)
	for (entrie of entries){
		if (entrie.includes(key) && entrie.includes(value)){
			return true
		}
	}
		return false
		
}

console.log(verifyEntries(lesson1, 'numeroEstudantes', 20));

const professorReport = (name, teacher) => {
	// const lesson = Object.entries(name)
	const lessons = name
	let lessonsNumber = 0;
	let aulas = [];
	const report = {};
	for (index in lessons) {
		const lesson = Object.entries(lessons[index]);
		for (indexTwo in lesson) {
			if (lesson[indexTwo].includes(teacher)) {
				lessonsNumber = lessonsNumber + lessons[index].numeroEstudantes;
				aulas.push(lessons[index].materia);
			}
		}
	}

	report.professor = teacher;
	report.aulas = aulas;
	report.estudantes = lessonsNumber;

	return report
}

console.log(professorReport(allLessons, 'Carlos'));