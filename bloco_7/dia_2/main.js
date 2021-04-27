const objeto = {
	html: 5,
	juca: 3,
	level: 4,
}

// console.log(Object.keys(objeto))

//OBJECT KEYS

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
	console.log(Object.keys(student))
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};


listSkills(student1);

//OBJECT VALUES

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithValues = (student) => {
	const keys = Object.keys(student);
	const value = Object.values(student);

	for (index in keys){
		console.log(`${keys[index]}, Nível: ${value[index]}`)
	}
}

listSkillsWithValues(student);

const listSkillDiferent = student => {
	const vetorLoki = Object.entries(student);
	for(index in vetorLoki){
		console.log(`${vetorLoki[index][0]}, Nível: ${vetorLoki[index][1]}`);
	}
}

listSkillDiferent(student);