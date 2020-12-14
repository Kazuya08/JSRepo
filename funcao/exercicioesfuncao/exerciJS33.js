vetorInteiro = [2,5,3,7]
vetorString = ['um', 'dois', 'tres', 'quatro']
vetorDouble = [2.2, 3.4, 5.6, 7.2]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))