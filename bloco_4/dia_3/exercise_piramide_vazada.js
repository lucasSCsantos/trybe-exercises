var n = 100;
let symbol = '*';
var inputLine = '';
var spacesNecessity = true;

for(var lineIndex = 1; lineIndex <= n; lineIndex += 1){
	spacesNecessity = true;
	inputLine = '';

	for(let index = lineIndex; index > 0; index -= 1){
					
		let spaceQuant = (n - index)/2
		let spaceSymbol = ' '
		
		if(spacesNecessity === true){

				for(let spaceIndex = 0; spaceIndex < spaceQuant; spaceIndex += 1){
				inputLine = inputLine + spaceSymbol;
			}
		
		}
		
		if(index === lineIndex || index === 1 || lineIndex === n || (lineIndex === (n - 1) && ((n - 1) % 2) !== 0)){
			inputLine = inputLine + symbol;
		}
		else{
			inputLine = inputLine + spaceSymbol;
		}

		spacesNecessity = false;
		
		
		
		
	}
	
	
		if(lineIndex % 2 !== 0){
			console.log(inputLine);
		}



}

