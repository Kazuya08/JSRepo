function formatarvalorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

console.log("Valor original")
console.log(0.1 + 0.2)

console.log("Valor formatado para reais")
formatarvalorDecimal(0.1 + 0.2)

