//posicao da rainha

let queenRowPosition = 4;
let queenColumnPosition = 4;

//posicao do oponente

let opponentRowPosition = 6;
let opponentCollumnPosition = 6;

//sucesso do atque
let succefullAttack;

//checar so ataque
let rowCheck = Math.abs(queenRowPosition - opponentRowPosition);
let collumnCheck = Math.abs(queenColumnPosition - opponentCollumnPosition);

//responder
if(collumnCheck == rowCheck){
  succefullAttack = true;
}else{
  succefullAttack = false;
}

console.log(succefullAttack)