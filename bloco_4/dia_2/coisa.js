sumMix([9, 3, '7', '3']), 22
  


function sumMix(x){
    let sum = 0;
    for( let i = 0; i < x.length; i += 1){
      if(typeof x[i] == 'number'){
        sum += x[i];
      }else{
        let number = parseInt(x[i]);
        sum += number;
      }
    }
    console.log(sum);
  }