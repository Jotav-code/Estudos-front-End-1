//O que são array ou vetores

// Como declarar um array

let array1 = ['joao', 20, true];
console.log(arra1);
//os itens dos vetores são separados por ","

// forEach

array1.forEach((item, index)=>{
    console.log(item,index);
});

//push, adiciona elementos no array no final do array
array1.push('gitHub');

// pop, remove um item no final do array

array1.pop();

// shift, remove um item do inicio do array

array1.shift();

// unshift, adiciona um item no inicio do array

array1.unshift('javascript');

//indexOf, retorna o indice de um valor dentro do array
console.log(array1.indexOf('javascript'))

//splice, remove ou substitui um item por um novo indice

console.log(array1.splice(0, 3));

//slice retorna uma parte de um array ja existente

let novoArray = array1.slice(0 , 2);

//Como criar um Objeto

let object = {
    nome: 'joao vitor',
    idade: 20,
    linguagem: 'javaScript',

};
//como acessar um obejto

var idade = object.idade;

console.log(idade);

var { lingaguem } = object;

console.log(object.nome);




