const divBkgClr = document.getElementById("bkg-color");
const divTxtClr = document.getElementById("txt-color");
const divTxtSize = document.getElementById("txt-size");
const divLineSpc = document.getElementById("line-space");
const divTxtType = document.getElementById("txt-type");
const button = document.querySelector("button");
const body = document.querySelector("body");
const blackButton = document.getElementById("blackButton");
const whiteButton = document.getElementById("whiteButton")
const main = document.querySelector("main")
 
window.onload = function() {
	//salvar cor da pagina
	body.style.backgroundColor = localStorage.getItem('backgroundColor');
	//salvar nome do botão de bkgColor
	if(localStorage.getItem("buttonBkgColorName") === null){
		blackButton.innerText = "Black"
	}else{
		blackButton.innerText = localStorage.getItem("buttonBkgColorName");
	}
	//salvar cor das letras
	body.style.color = localStorage.getItem('color');
	//salvar nome do butão de color
	if(localStorage.getItem("buttonColorName") === null){
		whiteButton.innerText = "White"
	}else{
		whiteButton.innerText = localStorage.getItem("buttonColorName");
	}
	//salvar tamanho da fonte
	main.style.fontSize = localStorage.getItem("fontSize");
	//salvar espaçamento das linhas
	main.style.lineHeight = localStorage.getItem("lineSpace");
	//salvar tipo da font
	main.style.fontFamily = localStorage.getItem("fontType");
};

function bkgColorChange(element){
	const elemento = element.target;
	const elementColor = element.target.innerText;
	if(elemento.parentNode.parentNode == divBkgClr){
		body.style.backgroundColor = elementColor;
		localStorage.setItem("backgroundColor", elementColor);
		if(elementColor === "Black"){
			elemento.innerText = "White";
			localStorage.setItem("buttonBkgColorName", elemento.innerText);
		}else if(elementColor === "White"){
			elemento.innerText = "Black";
			localStorage.setItem("buttonBkgColorName", elemento.innerText);
		}
	}
}

function txtColorChange(element){
	const elemento = element.target;
	const elementColor = element.target.innerText;
	if(elemento.parentNode.parentNode == divTxtClr){
		body.style.color = elementColor;
		localStorage.setItem("color", elementColor);
		if(elementColor === "Black"){
			elemento.innerText = "White"
			localStorage.setItem("buttonColorName", elemento.innerText)
		}else if(elementColor === "White"){
			elemento.innerText = "Black"
			localStorage.setItem("buttonColorName", elemento.innerText)
		}
	}
}

function fntSizeChange(element){
	const elemento = element.target;
	const elementFontSize = element.target.innerText;
	if(elemento.parentNode.parentNode == divTxtSize){
		main.style.fontSize = elementFontSize;
		localStorage.setItem("fontSize", elementFontSize);
	}
}

function lineSpaceChange(element){
	const elemento = element.target;
	const elementLineSpace = element.target.innerText;
	if(elemento.parentNode.parentNode == divLineSpc){
		main.style.lineHeight = elementLineSpace;
		localStorage.setItem("lineSpace", elementLineSpace);
	}
}

function fontTypeChange(element){
	const elemento = element.target;
	const elementFontType = element.target.innerText;
	if(elemento.parentNode.parentNode == divTxtType){
		main.style.fontFamily = elementFontType;
		localStorage.setItem("fontType", elementFontType);
	}
}

addEventListener("click", fontTypeChange);
addEventListener("click", lineSpaceChange);
addEventListener("click", fntSizeChange);
addEventListener("click", txtColorChange);
addEventListener("click", bkgColorChange);