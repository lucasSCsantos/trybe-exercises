let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
    
    
    soma = soma + numbers[i];
}

console.log('\n');
console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
    
    soma = soma + numbers[i];
}

let mediaArit = soma / numbers.length;

//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(mediaArit > 20){
    console.log(mediaArit + ' O valor é maior que 20');
}
else{
    console.log(mediaArit + ' O valor é menor ou igual a 20');
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = 0;

for (let i = 0; i < numbers.length; i += 1) {
    
    if(numbers[i] >= maior){
        maior = numbers[i]
    }else{

    }
}

console.log(maior)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let quant = 0;

for (let i = 0; i < numbers.length; i += 1) {
    
    if((numbers[i] % 2) != 0){
        quant += 1
    }
    
}

console.log(quant)

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    
    if(numbers[i] <= menor){
        menor = numbers[i]
    }else{

    }
}

console.log(menor)

//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

console.log('\n')

let number = []

for (let i = 0; i < 25; i += 1){
    
    number[i] = 1 + i;
}

for (let i = 0; i < number.length; i += 1) {
    console.log(number[i]);
}

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for(let numb of number){
    numb /= 2;
    console.log(numb)
}