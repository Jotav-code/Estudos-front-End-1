// solução 1
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('cat');

// solução 2

function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}


varificaPalindromo2('asa');

let nome = 'A mala nada na lama'

function verificarPalídromo(string){
    
    if(!string) return;
    
    return string.replaceAll(" ", "").toLowerCase().split("").reverse().join("") === string.toLowerCase().replaceAll(" ", "")
    
}
console.log(verificarPalídromo(nome))

let nome2 = 'vitor'

function verificarPalídromo(string){
    
    if(!string) return;
    
    // return string.replaceAll(" ", "").toLowerCase().split("").reverse().join("") === string.toLowerCase().replaceAll(" ", "")
    
    
    let original = string.replaceAll(" ", "").toLowerCase();
    let nomeVector = original.split("");
    let aux;
    for(let i = 0, j = nomeVector.length - 1; i < j; i++, j--){
        aux = nomeVector[i]
        nomeVector[i] = nomeVector[j]
        nomeVector[j] = aux;
    }
    let invertida = nomeVector.join("")
    console.log(original === invertida ? "É um polídromo": "Não é")
    
}
verificarPalídromo(nome2)