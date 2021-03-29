//quadrado

let asteriscos = '';


function quadrado(n){
	  let	m = n;
	for(let iS = 0; iS <= m; iS += 1){
			asteriscos = ''
			
		for(let i = 0; i < n; i += 1){
			asteriscos += '*'
	}
	
	console.log(asteriscos)  
	}
}

quadrado(10);

//piramide

function piramideEsquerda(n){
	let m = n
	for(let iS = 0; iS <= m; iS += 1){
			asteriscos = ''
			
			let i = iS;
		for( i ; i > 0; i -= 1){
			asteriscos += '*'
	}
	
	
	if(asteriscos.length != 0){
		console.log(asteriscos)   
	}
	 
	}
}

piramideEsquerda(10);


function piramideDireita(n){
	let m = n
	
	for(let iS = 0; iS < m; iS += 1){
			asteriscos = ''
			n = m;
			var x = n - iS;
					for(n; n > 0; n -= 1){
							x -= 1;
							if(x > 0){
									asteriscos += ' '
											
							}else{
									asteriscos += '*'
							} 
	}

	console.log(asteriscos)  
	}
}

piramideDireita(10);
    



//piramide real



let piramidStructure = []

var spacesNecessity = true;

function piramideCompleta(piramidBase){
	let piramidBaseCopy = piramidBase;
	let piramidBaseBackup = piramidBase;
	for(let index = 0; index <= piramidBaseCopy; index += 1){
		var indexSecond = index;
		piramidBase = piramidBaseBackup;
		piramidStructure = ''
		spacesNecessity = true;
		for(indexSecond; indexSecond > 0; indexSecond -= 1){
			if(spacesNecessity === true){
				var preSpaces = (piramidBase - indexSecond)/2
				var postSpaces = preSpaces;
			}
			
			for(preSpaces; preSpaces > 0; preSpaces -= 1){
				piramidStructure += ' ';
			}
	
			piramidStructure += '*';
			spacesNecessity = false;
		}  
	
		for(postSpaces; postSpaces > 0; postSpaces -= 1){
			piramidStructure += ' ';
		}
	
	
		if(index % 2 !== 0){
			console.log(piramidStructure)
		}  
		
	}

}

piramideCompleta(10);

//piramide vazada

function piramideVazada(piramidBase){
	let piramidBaseCopy = piramidBase;
	let piramidBaseBackup = piramidBase;
	for(let index = 0; index <= piramidBaseCopy; index += 1){
		var indexSecond = index;
		piramidBase = piramidBaseBackup;
		piramidStructure = []
		spacesNecessity = true;
		for(indexSecond; indexSecond > 0; indexSecond -= 1){
			if(spacesNecessity === true){
				var preSpaces = (piramidBase - indexSecond)/2
				var postSpaces = preSpaces;
			}
			
			for(preSpaces; preSpaces > 0; preSpaces -= 1){
				piramidStructure += ' ' ;;
			}
	
			if(indexSecond === index || (indexSecond - 1) == 0 || index == piramidBase || (index === (piramidBase - 1) && ((piramidBase - 1) % 2) !== 0)){
				piramidStructure += '*' ;
			}else{
				piramidStructure += ' ' ;
			}
			
			spacesNecessity = false;
		}  
	
		for(postSpaces; postSpaces > 0; postSpaces -= 1){
			piramidStructure += ' ' ;
		}
	
	
		if(index % 2 !== 0){
			console.log(piramidStructure)
		}  
		
	}

}

piramideVazada(30);