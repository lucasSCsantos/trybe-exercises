const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
Segue abaixo um exemplo do uso de event.target:
*/

addEventListener("click", classNameTech);
input.addEventListener("keyup", changeText);
myWebpage.addEventListener("dblclick", pageOpen);
myWebpage.addEventListener("click", changeRandomColor)

function classNameTech(element){
	const actualElement = element.target

	if(actualElement === divUm || actualElement === divDois || actualElement === divTres ){
		const tech = document.querySelector(".tech")
		tech.classList.remove("tech")
	
		element.target.className = "tech";
		console.log(element.target);
	}
}

function changeText(element){
	const valor = document.querySelector("input").value
	document.querySelector(".tech").innerText = valor
}

function changeRandomColor(element){
	const color = Math.floor(Math.random()*16777215).toString(16);
	const actualElement = element.target
	actualElement.style.color = "#" + color
}

function pageOpen(){
	window.open("https://lucasscsantos.github.io/")
}


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.