const awake = () => console.log('Acordando!!');
const coffe = () => console.log('Tomar café');
const bath = () => console.log('Banhar');

const doingThings = (funct) => {
	funct();
}

doingThings(bath);