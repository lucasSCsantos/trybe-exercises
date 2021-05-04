const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

Object.values(grades).every((grade) => grade === 'Aprovado')

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(
	Object.values(grades).every((grade) => grade === 'Aprovado'));