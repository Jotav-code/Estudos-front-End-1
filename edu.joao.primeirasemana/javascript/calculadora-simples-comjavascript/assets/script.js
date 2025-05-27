function calculadora() {
    const input = Number(prompt("Bem-vindo à nossa calculadora \n 1 - somar \n 2 - multiplicar \n 3 - dividir \n 4 - subtrair"));

    const num1 = Number(prompt("Digite um número"));
    const num2 = Number(prompt("Digite outro número"));

    function somar(a, b) {
        return a + b;
    }

    function subtrair(a, b) {
        return a - b;
    }

    function multiplicar(a, b) {
        return a * b;
    }

    function dividir(a, b) {
        if (b === 0) {
            alert("Digite um número diferente de 0 para o denominador!!");
            return null;
        }
        return a / b;
    }

    let resultado;

    switch (input) {
        case 1:
            resultado = somar(num1, num2);
            break;
        case 2:
            resultado = multiplicar(num1, num2);
            break;
        case 3:
            resultado = dividir(num1, num2);
            break;
        case 4:
            resultado = subtrair(num1, num2);
            break;
        default:
            alert("Digite um número válido!!!!");
            return; // interrompe a execução
    }

    if (resultado !== null && resultado !== undefined) {
        alert("O resultado é: " + resultado);
    }
}

calculadora();
