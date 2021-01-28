function cumprimentar (nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

console.log(cumprimentar("Maria"))

function cumprimentar2 (nome) {
    return `Olá, ${nome}!`
}

console.log(cumprimentar2("João"))