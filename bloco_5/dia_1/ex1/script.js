var header = document.getElementById("header-container");
header.style.backgroundColor = "green"

var emergencyCards = document.querySelector(".emergency-tasks");
var emergencyCardsHeaders = document.querySelectorAll(".emergency-tasks div h3");

emergencyCards.style.backgroundColor = "orange"
emergencyCardsHeaders[0].style.backgroundColor = "pink"
emergencyCardsHeaders[1].style.backgroundColor = "pink"

var noEmergencyTasks = document.querySelector(".no-emergency-tasks");
var noEmergencyCardsHeaders = document.querySelectorAll(".no-emergency-tasks div h3");

noEmergencyTasks.style.backgroundColor = "yellow"
noEmergencyCardsHeaders[0].style.backgroundColor = "black"
noEmergencyCardsHeaders[1].style.backgroundColor = "black"

var footer = document.getElementById("footer-container")

footer.style.backgroundColor = "darkgreen"