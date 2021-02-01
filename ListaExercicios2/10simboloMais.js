function simbolomais (vezes) {
    let resultado = ''

    for(let i = 0; i < vezes; i++){
        resultado += '+'
    }
    return resultado
}

console.log(simbolomais(2))

function simbolomais2 (quant) {
    return Array(quant).fill('+').join('')
}

console.log(simbolomais2(3))

function simbolomais3(qtd) {
 return "+".repeat(qtd)
}

console.log(simbolomais3(4))