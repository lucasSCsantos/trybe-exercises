let aposta = [1, 20, 15, 30, 55, 60];
let acertos = 0;



for (let i = 0; i < aposta.length; i += 1){
    let sortNumb = Math.ceil(Math.random() * 60);
    
    console.log(sortNumb + " " + aposta[i]);

    for(let numb of aposta)
        if(numb == sortNumb){
            acertos += 1;
    }
    
}

console.log('\n');

console.log('Voce acertou ' + acertos + ' numeros.');

