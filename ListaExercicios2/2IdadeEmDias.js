function IdadeEmDias(idade) {
    let dias = 365 * idade
    return `Sua idade em dias é ${dias} dias`
}

console.log(IdadeEmDias(25))
console.log(IdadeEmDias(70))
console.log(IdadeEmDias(20))

function converterIdadeEmAnosParaDias(idadeEmAnos) {
    const diasDoAno = 365

    return diasDoAno * idadeEmAnos
}

console.log(converterIdadeEmAnosParaDias(25))
console.log(converterIdadeEmAnosParaDias(70))
console.log(converterIdadeEmAnosParaDias(20))
