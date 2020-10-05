/*function divisao(dividendo, divisor){
    let resultado  = dividendo / divisor 
    
    let restoDivisao = dividendo % divisor

    console.log(`O resultado da divisão é: ${resultado}`)
    console.log(`O resto da divisão é: ${restoDivisao}`)
}*/

function divisao (dividendo, divisor) {
    console.log("resultado: " + Math.floor(dividendo / divisor))
    console.log(`Resto: ${dividendo % divisor}`)
}


divisao(11, 4)