
numbers = [1,2,3,5,6,8,9]

let tamanho = numbers.length

for(let i = 0; i < tamanho; i += 1){
  if(numbers[i+1] != (numbers[i] + 1)){
    numbers.splice(i+1, 0, numbers[i] + 1)
  }
}

console.log(numbers)