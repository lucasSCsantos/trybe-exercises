//quadrado

let n = 5;
let asteriscos = [];
let m = n;

for(let iS = 0; iS <= m; iS += 1){
    asteriscos = []
    n = 5;
  for(let i = 0; i < n; i += 1){
    asteriscos.push('*')
}

console.log(asteriscos)  
}

//piramide

let n = 5;
let asteriscos = [];
let m = n;

for(let iS = 0; iS <= m; iS += 1){
    asteriscos = []
    n = 5;
    let i = iS;
  for( i ; i > 0; i -= 1){
    asteriscos.push('*')
}


if(asteriscos.length != 0){
  console.log(asteriscos)   
}
 
}


//segunda piramide
let n = 5;
let asteriscos = [];
let m = n;

for(let iS = 0; iS < m; iS += 1){
    asteriscos = []
    n = 5;
 
    var x = n - iS;
        for(n; n > 0; n -= 1){
            x -= 1;
            if(x > 0){
                asteriscos.push('')
                    
            }else{
                asteriscos.push('*')
            } 
}
    


console.log(asteriscos)  
}

//piramide real

var piramidBase = 10;
var piramidBaseBackup = piramidBase;
let piramidStructure = []
let piramidBaseCopy = piramidBase;
var spacesNecessity = true;

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
      piramidStructure.push(' ');
    }

    piramidStructure.push('*');
    spacesNecessity = false;
  }  

  for(postSpaces; postSpaces > 0; postSpaces -= 1){
    piramidStructure.push(' ');
  }


  if(index % 2 !== 0){
    console.log(piramidStructure)
  }  
  
}

//piramide vazada

var piramidBase = 7;
var piramidBaseBackup = piramidBase;
let piramidStructure = []
let piramidBaseCopy = piramidBase;
var spacesNecessity = true;

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
      piramidStructure.push(' ');
    }

    if(indexSecond === index || (indexSecond - 1) == 0 || index == piramidBase){
      piramidStructure.push('*');
    }else{
      piramidStructure.push(' ');
    }
    
    spacesNecessity = false;
  }  

  for(postSpaces; postSpaces > 0; postSpaces -= 1){
    piramidStructure.push(' ');
  }


  if(index % 2 !== 0){
    console.log(piramidStructure)
  }  
  
}
