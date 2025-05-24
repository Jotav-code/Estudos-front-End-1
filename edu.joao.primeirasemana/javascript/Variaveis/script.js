// Exemplo: Verificar a faixa etária de uma pessoa

let idade = 17; // você pode mudar esse valor para testar outras faixas

// Estrutura condicional if...else if...else
if (idade < 13) {
    console.log("Você é uma criança.");
} else if (idade >= 13 && idade < 18) {
    console.log("Você é um adolescente.");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
} else {
    console.log("Você é um idoso.");
}

// Outro exemplo usando switch-case
let dia = 3; // Representa o número do dia da semana (1 = Domingo, 2 = Segunda, etc.)

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido!");
        break;
}

// Exemplo 1: FOR - contar de 1 a 5
for (let i = 1; i <= 5; i++) {
    // 'i' é o contador, começa em 1, vai até 5, incrementando de 1 em 1
    console.log("FOR - Contando: " + i);
}

// Exemplo 2: WHILE - repetir enquanto uma condição for verdadeira
let contador = 1;

while (contador <= 5) {
    console.log("WHILE - Contando: " + contador);
    contador++; // incrementa o contador para evitar loop infinito
}

// Exemplo 3: DO...WHILE - executa pelo menos uma vez, mesmo que a condição seja falsa
let numero = 6;

do {
    console.log("DO...WHILE - Número é: " + numero);
    numero++;
} while (numero <= 5); // Aqui a condição é falsa já no início, mas o bloco roda 1 vez
