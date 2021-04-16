const estados = [
	{ uf: 'AC', nome: 'Acre' },
	{ uf: 'AL', nome: 'Alagoas' },
	{ uf: 'AP', nome: 'Amapá' },
	{ uf: 'AM', nome: 'Amazonas' },
	{ uf: 'BA', nome: 'Bahia' },
	{ uf: 'CE', nome: 'Ceará' },
	{ uf: 'DF', nome: 'Distrito Federal' },
	{ uf: 'ES', nome: 'Espirito Santo' },
	{ uf: 'GO', nome: 'Goiás' },
	{ uf: 'MA', nome: 'Maranhão' },
	{ uf: 'MS', nome: 'Mato Grosso do Sul' },
	{ uf: 'MT', nome: 'Mato Grosso' },
	{ uf: 'MG', nome: 'Minas Gerais' },
	{ uf: 'PA', nome: 'Pará' },
	{ uf: 'PB', nome: 'Paraíba' },
	{ uf: 'PR', nome: 'Paraná' },
	{ uf: 'PE', nome: 'Pernambuco' },
	{ uf: 'PI', nome: 'Piauí' },
	{ uf: 'RJ', nome: 'Rio de Janeiro' },
	{ uf: 'RN', nome: 'Rio Grande do Norte' },
	{ uf: 'RS', nome: 'Rio Grande do Sul' },
	{ uf: 'RO', nome: 'Rondônia' },
	{ uf: 'RR', nome: 'Roraima' },
	{ uf: 'SC', nome: 'Santa Catarina' },
	{ uf: 'SP', nome: 'São Paulo' },
	{ uf: 'SE', nome: 'Sergipe' },
	{ uf: 'TO', nome: 'Tocantins' }
];
const select = document.querySelector('select');

function stateAppend() {
	for(let estado of estados){
		const option = document.createElement('option');
		option.innerText = estado.nome;
		select.appendChild(option);
	}
}

stateAppend();

const submitButton = document.querySelector('#submit');
const inputData = document.getElementById('data')

function dataCheck() {
	const inputDataValue = document.getElementById('data').value;
	const returned = inputDataValue.split('/');
	if((returned[0] < 0 || returned[0] > 31) || (returned[1] > 12 || returned[1] < 0) || (returned[2] < 0 )){
		window.alert('Erro! Data invalida!')
	}

}


submitButton.addEventListener('keyup', dataCheck);