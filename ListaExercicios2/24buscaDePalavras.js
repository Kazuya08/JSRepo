function buscaPalavrasSemelhantes (inicio, Palavras) {
    const resultado = []

    for(let palavra of Palavras){
        if(palavra.includes(inicio)){
            resultado.push(palavra)
        }
    }
    return resultado
}

console.log(buscaPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))


function buscarPalavras(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavras("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavras("java", ["javascript", "java", "c++"]))