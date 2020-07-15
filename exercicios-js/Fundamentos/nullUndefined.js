let valor //não inicializar
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro! pois não e possivel acessar algo que está nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined, deixa isso a trabalho da linguagem
console.log(!!produto.preco)
// delete produto.preco //caso queria excluir algo
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)