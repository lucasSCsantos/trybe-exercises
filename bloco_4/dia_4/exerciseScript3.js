

function palindromeVerify(palavra) {
	let palavras = palavra
	let palavraContrario = '';
	let palindrome
	for(let i = palavras.length - 1; i >= 0; i -= 1){
		palavraContrario += palavras[i]
	}
	
	if(palavras === palavraContrario){
		return true;
	}else{
		return false;
	}

	
}

let isPalindrome = palindromeVerify('socorrammesubinoonibusemmarrocos')
console.log(isPalindrome)

function biggestValueIndex(array) {

let biggestValue = 0;

	for(let arr of array){
			if(arr > biggestValue){
				biggestValue = arr;
			}
	}

	return array.indexOf(biggestValue);

}



let index = biggestValueIndex([1, 2, 3, 4, 104, 9, 10 ,2, 6]);

console.log(index)



function pipeFix(numbers){
 
	let tamanho = numbers.length;
	let lastDigit = numbers[tamanho - 1];
	
		for(let i = 0; i < lastDigit - 1; i += 1){
      
      if(numbers[i] === lastDigit){
        break;
      }
			else if(numbers[i+1] != (numbers[i] + 1)){
				numbers.splice(i+1, 0, numbers[i] + 1)
			}
		}
		
		return numbers
	}

	console.log(pipeFix([-1,4]))