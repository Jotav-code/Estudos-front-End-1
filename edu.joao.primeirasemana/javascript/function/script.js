// Uma função é um bloco de código que executa uma tarefa e pode ser reutilizado
// Aqui vamos criar uma função que soma dois números e exibe o resultado

function somar(a, b) {
    // 'a' e 'b' são parâmetros: valores que a função espera receber
    let resultado = a + b; // somamos os dois valores recebidos
    console.log("Resultado da soma:", resultado); // exibimos o resultado no console
}

// Agora chamamos a função passando dois valores reais, chamados de argumentos
somar(5, 3); // vai imprimir: Resultado da soma: 8
somar(10, -2); // Resultado da soma: 8


// Uma função também pode "devolver" um valor usando a palavra-chave return
// Isso permite que a gente use esse valor em outros lugares do programa

function calcularDobro(numero) {
    // retorna o dobro do número recebido
    return numero * 2;
}

// Podemos armazenar o resultado em uma variável
let resultado = calcularDobro(4);
console.log("Dobro de 4 é:", resultado); // Imprime: Dobro de 4 é: 8

// Também podemos usar o retorno diretamente dentro de outro comando
console.log("Dobro de 10 é:", calcularDobro(10)); // Imprime: Dobro de 10 é: 20

// Uma função anônima não tem nome e é atribuída diretamente a uma variável
// Muito usada quando precisamos passar funções como argumentos ou guardar em variáveis

const saudacao = function(nome) {
    // nome é o parâmetro
    return "Olá, " + nome + "!";
};

// Agora usamos a variável como se fosse o nome da função
console.log(saudacao("João")); // Imprime: Olá, João!
console.log(saudacao("Maria")); // Imprime: Olá, Maria!

// Arrow function é uma forma compacta de escrever funções
// Muito usada em programação moderna com JavaScript

const quadrado = (n) => {
    return n * n; // Retorna o quadrado de um número
};

console.log("Quadrado de 3:", quadrado(3)); // Imprime: Quadrado de 3: 9
