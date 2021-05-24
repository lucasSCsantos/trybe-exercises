// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(array) {
  let newArray = array.split(' ');
  return newArray;
}

// Desafio 4
function concatName(stringArray) {
  let string = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, draws) {
  let points = (wins * 3) + draws;
  return points;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = Math.max(...numberArray);
  let count = 0;
  for (let number of numberArray) {
    if (number === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs((cat1 - mouse));
  let cat2Distance = Math.abs((cat2 - mouse));
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

function analisysFizz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let fizzBuzzArray = [];
  for (let arr of arrayNumbers) {
    fizzBuzzArray.push(analisysFizz(arr));
  }
  return fizzBuzzArray;
}

// Desafio 9


function encode(string) {
  const code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  const stringArray = string.split('');
  return stringArray.map((letter) => {
    for (coded in code) {
      if (letter === coded) {
        return code[coded];
      }
    }
    return letter;
  }).join('')
}

function decode(stringCoded) {
  const code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  const stringArray = stringCoded.split('');
  return stringArray.map((letter) => {
    for (coded in code) {
      if (letter == code[coded]) {
        return coded;
      }
    }
    return letter;
  }).join('')
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
