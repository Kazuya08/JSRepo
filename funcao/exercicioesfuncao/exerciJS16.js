function calculadora(a,b,operador) {
    switch(operador){
        case 'soma':
            return a + b
        case 'subtracao':
            return a - b
        case 'divisao':
            return a / b
        case 'multiplicacao':
            return a * b
        default:
            return "está operação é inválida"
    };
};

console.log(calculadora(5, 5, "soma"))
console.log(calculadora(10, 5, "subtracao"))
console.log(calculadora(10, 4, "divisao"))
console.log(calculadora(4, 4, "multiplicacao" ))
console.log(calculadora(5, 5, "asasas"))