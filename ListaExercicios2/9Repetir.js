function repetir (elemento, Nrepete) {
    let resultado = []
    for (let i = 0; i < Nrepete; i++){
        resultado.push(elemento)
    }
    return resultado
}

console.log(repetir('codigo', 5))
console.log(repetir(5, 6))