const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
	const maxDamage = dragon.strength;
	const damage = Math.round((Math.random() * (maxDamage - 15)) + 15);
	return damage;
}

const warriorDamage = () => {
	const maxDamage = warrior.strength * warrior.weaponDmg;
	const minDamage = warrior.strength;
	const damage = Math.round((Math.random() * (maxDamage - minDamage)) + minDamage);
	return damage;
}

const mageDamage = () => {
	const maxDamage = mage.intelligence * 2;
	const minDamage = mage.intelligence;
	const mana = mage.mana;
	const consumedMana = 15;
	const damage = Math.round((Math.random() * (maxDamage - minDamage)) + minDamage);
	if (mana < 15) {
		return {	damage: "Não possui mana suficiente", consumedMana: 0	}
	}
	return {  damage, consumedMana,  }
}





const gameActions = {
	warriorAttack: (action) => {
		const damage = action();
		warrior.damage = damage;
		dragon.healthPoints -= damage;
	},
	mageAttack: (action) => {
		const damage = action();
		mage.damage = damage.damage;
		mage.mana -= damage.consumedMana;
		dragon.healthPoints -= damage.damage;
	},
	dragonAttack: (action) => {
		const damage = action();
		dragon.damage = damage;
		warrior.healthPoints -= damage;
		mage.healthPoints -= damage;
	},
	roundEnd: () => battleMembers,
};

const mageHealth = mage.healthPoints;
const warriorHealth = warrior.healthPoints;
const dragonHealth = dragon.healthPoints;

// const completeGame = (a) => {
// 	const firstFunction = a();
// 	firstFunction();
// 		// b();
// 		// c();
// 		// console.log(final());
// 	// for (; mageHealth !== 0 || warriorHealth !== 0 || dragonHealth !== 0;){
// 	// 	a();
// 	// 	b();
// 	// 	c();
// 	// 	console.log(final());
// 	// }

// }

// const mageHealth = mage.healthPoints;
// const warriorHealth = warrior.healthPoints;
// const dragonHealth = dragon.healthPoints;

console.log(gameActions.roundEnd())

const completeGame = (a, b, c, d) => {
	for (; mage.healthPoints > 0 && warrior.healthPoints > 0 && dragon.healthPoints > 0;){
		const function1 = (a) => a;
		function1(warriorDamage);
		const function2 = (b) => b;
		function2(dragonDamage);
		const function3 = (c) => c;
		function3(mageDamage);
		console.log(d);
		
		}
}

completeGame(gameActions.warriorAttack(warriorDamage), gameActions.dragonAttack(dragonDamage), gameActions.mageAttack(mageDamage), gameActions.roundEnd());

// for (; mage.healthPoints > 0 && warrior.healthPoints > 0 && dragon.healthPoints > 0;){

// gameActions.warriorAttack(warriorDamage);
// gameActions.dragonAttack(dragonDamage);
// gameActions.mageAttack(mageDamage);
// console.log(gameActions.roundEnd())

// }


// gameActions.warriorAttack(warriorDamage);
// gameActions.mageAttack(mageDamage);
// gameActions.dragonAttack(dragonDamage);
// console.log(gameActions.roundEnd())