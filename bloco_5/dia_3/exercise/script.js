const input = document.querySelector("input");
const button = document.getElementById("btn-add")
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

fridayButton("Sexta-Feira");

holidayButton("Feriados");

createDaysOfTheWeek();

createDaysList();

document.querySelector("#btn-holiday").addEventListener("click", holidayColorChange);

document.querySelector("#btn-friday").addEventListener("click", fridayTextChange);

addEventListener("mouseover", dayZoom);

addEventListener("mouseout", dayZoom);

taskCreate("Cozinhar");

subtitleColor("blue");

document.querySelector(".task").addEventListener("click", selection);

addEventListener("click", calendarSelection);

button.addEventListener("click", compromisseCreate);

input.addEventListener("keyup", function(evento){
	if(evento.keyCode === 13){
		const compromisse = document.createElement("span");
	
		compromisse.innerText = document.querySelector("input").value;

		if(document.querySelector("input").value === ""){
			window.alert("ERRO!")
			return false
		}
	
		document.querySelector(".input-container").appendChild(compromisse);
	
		document.querySelector("input").value = ""
	}
});

// Escreva seu código abaixo.
function createDaysList() {
	const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

	for(let index = 0; index < dezDaysList.length; index += 1){
		const day = document.createElement("li")
		day.innerText = dezDaysList[index];
		document.getElementById("days").appendChild(day);
		day.classList.add("day")
		
		if(dezDaysList[index] === 24 || dezDaysList[index] === 31){
			day.classList.add("holiday");
		}
		else if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18){
			day.classList.add("friday");
		}else if( dezDaysList[index] === 25){
			day.className = "day friday holiday"
		}
	}
}

function holidayButton(string){
	const holidayBtn = document.createElement("button");
	holidayBtn.id = "btn-holiday";
	holidayBtn.innerText = string;
	document.querySelector(".buttons-container").appendChild(holidayBtn);
}

function holidayColorChange(){
	const holidays = document.getElementsByClassName("holiday");

	for(let index = 0; index < holidays.length; index += 1){
		if(holidays[index].style.color !== "red"){
			holidays[index].style.color = "red"
		}else{
			holidays[index].style.color = "#777"
		}
	}
}

function fridayButton(string){
	const fridayBtn = document.createElement("button");
	fridayBtn.id = "btn-friday";
	fridayBtn.innerText = string;
	document.querySelector(".buttons-container").appendChild(fridayBtn);
}

function fridayTextRegistration(){
	const fridays = document.getElementsByClassName("friday");
	const register = [];

	for(let index = 0; index < fridays.length; index += 1){
		register[index] = fridays[index].innerText;
	}

	return register;
}

function dayZoom(event) {
	if(event.target.parentNode === document.getElementById("days")){
			event.target.classList.toggle("zoom")
	}
}

const registredFridays = fridayTextRegistration();
function fridayTextChange(){
	const fridays = document.getElementsByClassName("friday");

	for(let index = 0; index < fridays.length; index += 1){
		const text = fridays[index].innerText;
		
		if(fridays[index].innerText !== "SEXTOU"){
	
			fridays[index].innerText = "SEXTOU";
		}else{
			fridays[index].innerText = registredFridays[index];
		};
	}
}

function taskCreate(string){
	const task = document.createElement("span");
	task.innerText = string
	document.querySelector(".my-tasks").appendChild(task);
}

function subtitleColor(string){
	const div = document.createElement("div");
	div.classList.add("task");
	div.style.backgroundColor = string;
	document.querySelector(".my-tasks").appendChild(div);
}

function selection(){
	const taskDiv = document.querySelector(".task");
	taskDiv.classList.toggle("selected");
}

function calendarSelection(event){
	if(event.target.parentNode === document.getElementById("days")){
		if(event.target.style.color !== document.querySelector(".selected").style.backgroundColor){
			event.target.style.color = document.querySelector(".selected").style.backgroundColor;
		}
		else if(event.target.style.color === document.querySelector(".selected").style.backgroundColor){
			event.target.style.color = "rgb(119,119,119)"
		}
	}
}


function compromisseCreate(){
	const compromisse = document.createElement("span");

	compromisse.innerText = document.querySelector("input").value;

	if(document.querySelector("input").value === ""){
		window.alert("ERRO!")
		return false
	}

	document.querySelector(".input-container").appendChild(compromisse);

	document.querySelector("input").value = ""
}

