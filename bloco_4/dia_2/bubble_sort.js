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

//multiplica pelo proximo digito e coloca em uma nova string
let array = []
let tamanho = numbers.length;
for(let i = 0; i < tamanho; i += 1){
        let i2 = i + 1;
        
        if(i2 < tamanho){
          let mult = numbers[i] * numbers[i2];
          array.push(mult)
        }
        else{
          let mult = numbers[i] * 2;
          array.push(mult)
        }
          
  
}

console.log(array)