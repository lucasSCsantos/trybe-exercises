let a = 4;
let b = 5;
let c = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
if (a > b){
    console.log(a);
}
else if (b > a){
    console.log(b);
}
else {
    console.log("Iguais");
}


//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
if (a > b && a > c){
    console.log(a);
}
else if (b > a && b > c){
    console.log(b);
}
else if (c > a && c > b){
    console.log(c);
}
else {
    console.log("Não tem maior");
};

//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
if (a > 0){
    console.log('positive')
}
else if (a < 0){
    console.log('negative')
}
else {
    console.log('zero')
}

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let ang1 = 30;
let ang2 = 150;
let ang3 = 60;
let angGer;

angGer = ang1 + ang2 + ang3;

if (angGer == 180 && (ang1 > 0 && ang2 > 0 && ang3 > 0)){
    console.log('true');
}
else if (angGer =! 180 || (ang1 > 0 || ang2 > 0 || ang3 || 0)){
    console.log('false');
};

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let pecaXadrez = 'PEÃO'

pecaXadrez = pecaXadrez.toLowerCase();

console.log(pecaXadrez);

if (pecaXadrez == 'cavalo') {
    console.log('movimento em L')
}
else if (pecaXadrez == 'bispo') {
    console.log('movimento livre em diagonal')
}
else if (pecaXadrez == 'peão') {
    console.log('movimento de no máximo duas casas a frente')
}
else if (pecaXadrez == 'rainha') {
    console.log('qualquer movimento, exceto L')
}
else if (pecaXadrez == 'torre') {
    console.log('movimento livre em retas')
}
else if (pecaXadrez == 'rei') {
    console.log('movimento livre para uma casa de distancia')
}
else {
    console.log('erro')
};

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let percent = 45;

if (percent > 100 || percent < 0){
    console.log('Erro')
}
else if (percent >= 90) {
    console.log('A')
}
else if (percent >= 80) {
    console.log('B')
}
else if (percent >= 70) {
    console.log('C')
}
else if (percent >= 60) {
    console.log('D')
}
else if (percent >= 50) {
    console.log('E')
}
else if (percent < 50) {
    console.log('F')
}
else if (percent > 100 || percent < 0){
    console.log('Erro')
}

//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
let num1 = 1;
let num2 = 3;
let num3 = 7;

num1 = num1 % 2;
num2 = num2 % 2;
num3 = num3 % 2;

if(num1 == 0 || num2 == 0 || num3 == 0){
    console.log('true');
}
else{
    console.log('false')
}
 
//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
let numb1 = 1;
let numb2 = 3;
let numb3 = 6;

numb1 = numb1 % 2;
numb2 = numb2 % 2;
numb3 = numb3 % 2;

if(numb1 > 0 || numb2 > 0 || numb3 > 0){
    console.log('true');
}
else{
    console.log('false');
}

//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let cost = 10*1000;
let val = 20*1000;
let costImpost = (cost * 20)/100;
let costTotal = (cost + costImpost);
let lucro = val - costTotal;

console.log(lucro);




