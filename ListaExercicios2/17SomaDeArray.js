function SomaDeArray (numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}

console.log(SomaDeArray([10, 10, 10]))

function SomarNumeros(numeros) {
    const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)

    return soma
}

console.log(SomarNumeros([10, 10, 10]))
console.log(SomarNumeros([15, 15, 15, 15]))