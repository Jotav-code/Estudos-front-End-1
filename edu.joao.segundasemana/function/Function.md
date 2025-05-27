# Funções😎
## Função autoinvocável
```javascript
 //EXEMPLO
 (
    function(){
        let nome = "joão";
        return nome;
    }
 )()
```
## Ela pode ter parâmetros
```javascript
(
    function(a,b){
        return a + b;
    }
 
)(2,5)
```
## Ela pode ser guardada em uma variável
```javascript
const soma = (
    function(a,b){
        return a + b;
    }
 
)(2,5)
```
## Funções CallBaks
### é uma função que é passada como argumento para outra. Utilizando callbacks, você tem maior controle de ordem de chamadas
```javascript
    //Exemplo
    const calc = function(operacao, num1, num2){
        return operacao(num1, num2);
    }

    const soma = function(num1, num2){
        return num1 + num2;
    }

    const sub = function(num1, num2){
        return num1 - num2;
    }

    const resultadoSoma = calc(soma,2,3);
    const resultadoSub = calc(sub, 5,3); 
```
