//Crescente

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for(let i2 = 0; i2 < numbers.length; i2 += 1){
  for( let i = 0; i < numbers.length; i += 1){

          if(numbers[i+1] < numbers[i]){
            let guardar = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = guardar;
          }

  }
}

console.log(numbers)

//Decrescente

for(let i2 = 0; i2 < numbers.length; i2 += 1){
  for( let i = 0; i < numbers.length; i += 1){

          if(numbers[i+1] > numbers[i]){
            let guardar = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = guardar;
          }

  }
}

console.log(numbers)