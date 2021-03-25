let pizzas = ['Frango', 'Carne', 'Queijo', 'Toscana', 'Tomate Seco'];
pizzas[5] = 'Marquerita';//adiciona na posição 5
pizzas[4] = 'Chocolate';//adiciona e sobescreve na posição 4
pizzas.push('Calabresa');//adiciona a ultima posição
pizzas.unshift('Palmito');//adiciona na primeira posição
pizzas.pop();//remove o ultimo item
pizzas.shift();//remove o primeiro item

//pizzas[i]; //Informa o valor que esta na posição do indice

console.log(pizzas[2]);
console.log(pizzas.indexOf('Frango'));//Informa o indice de 'Frango'

pizzas.length;

console.log(pizzas);//Informa os valores
console.log(pizzas.length);//Informa o tamanho do array
console.log(pizzas.sort());//Ordena o array

for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
};