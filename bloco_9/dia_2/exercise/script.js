// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
let joke;

const fetchJoke = () => {
	const h2 = document.querySelector('h2');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => joke = data.joke)
		.then(joke => document.querySelector('h2').innerText = joke)
};

window.onload = () => {
	fetchJoke();
}