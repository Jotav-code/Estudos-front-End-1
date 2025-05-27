# Parâmetros
### Como era antes de 2015 ter um valor de argumetno padrão
```javascript
function exp(num, exp){
    if(exp === undefined){
        exp = 1;
    }
}
```
### Hoje em dia ficou muito mais facíl

```javascript
function exp(num, exp = 1){

}
```
### O argumetno arguments => tem a função de retornar quantos argumetos foram passados para a função

``` javascript
    //Exemplo
function showArgs(){
    return arguments;
}
```
 ### Por padrão a função não reconhece o array completo quando mandamos como parâmetro. Ex: quero somar os números de um array

 ```javascript
 var array = [2,4,5]
 function somar(a, b, c){
    return a + b + c
 }
    // Usamos o método spreed, que é os ... antes do array
console.log(somar(...array))
 ```
 ### De forma quase que análoga o rest transfoma argumetnos em array "..."

 ```javascript

 function(...args){
    return args.length;
 }
 console.log(2,4,5);

 //valor experado é 3
 ```

 ### object destructuing, Entre chaves { }, podemos filtrar apenas os dados que nos interessam em um objeto.
 ``` javascript

 const user = {
    id: 90,
    idade: 20,
    fullName: {
        firstName: "João",
        lastName: "Vitor",
    }
 }

 function userId({id}){
    return id
 }

 function getName({fullName: {firstName: first, lastName: last}}){
    return `${first},${last}`
 }

 userId(user)
 getName(user)
 ```