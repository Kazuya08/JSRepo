function aumento(plano,salarioAtual) {
    switch(plano){
        case 'A':
           salarioAtual = salarioAtual + (salarioAtual * 0.1)
           return `O seu novo salário é ${salarioAtual}`
        case 'B':
           salarioAtual = salarioAtual + (salarioAtual * 0.15)
           return `O seu novo salário é ${salarioAtual}`
        case 'C':
            salarioAtual = salarioAtual + (salarioAtual * 0.2)
            return `O seu novo salário é ${salarioAtual}`
        default:
            return "Plano inválido"

    };
};

console.log(aumento("A", 1000));
console.log(aumento("B", 1000));
console.log(aumento("C", 1000));
console.log(aumento("D", 1000));