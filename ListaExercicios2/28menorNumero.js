function menorNumero (numeros) { 
    let menor = numeros[0]
    for(let i in numeros){
        if(numeros[i] < menor){
           menor = numeros[i]
        } 
    }
    return menor
}

console.log(menorNumero([10, 5, 35, 65]))

function menorNumero2 (numeros) {
    return Math.min(...numeros);
}

console.log(menorNumero2([10, 5, 35, 65]))
console.log(menorNumero2([5, -15, 50, 3]))