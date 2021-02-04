function filtrarQuantidadeDeDigitos (numeros, qtdDesejada) {
    let resultado = []

    for(numero of numeros){
        const qtdDigitos  = String(numero).length

        if(qtdDigitos === qtdDesejada){
            resultado.push(numero)
        }
    }

    return resultado
    
}

console.log(filtrarQuantidadeDeDigitos([38, 2, 265, 10, 125, 11], 2))

console.log(filtrarQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))