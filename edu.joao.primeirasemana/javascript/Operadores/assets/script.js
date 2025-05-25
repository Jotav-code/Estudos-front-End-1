function operadores(){
    const n1 = Number(prompt("Digite um número"));
    const n2 = Number(prompt("Digite outro número"));

    if((n1 || n2) == null || (n1 || n2) == !isNaN(n1) || (n1 || n2) == !isNaN(n1) ){
        alert("Digite um número válido");
    }

    if(n1 == n2){
        if(( n1 + n2 ) < 10){
            alert(`Os número ${n1} e ${n2} são iguais. Sua soma é ${n1+n2} que sua soma é menor que 10`);
        }
    }

    if(n1 != n2){
        if(( n1 + n2 ) < 10){
            alert(`Os número ${n1} e ${n2} não são iguais. Sua soma é ${n1+n2} que sua soma é menor que 10`);
        }
    }
}
operadores()