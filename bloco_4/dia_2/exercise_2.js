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

