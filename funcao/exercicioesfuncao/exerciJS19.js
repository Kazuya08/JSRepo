function cardapio(codigo,quant){
    switch(codigo){
        case 100:
            preco = 3.00
            return `Cachorro Quente total:${preco * quant}`
        case 200:
            preco = 4.00
            return `Hamburguer Simples total: ${preco * quant}`
        case 300:
            preco = 5.50
            return `Cheeseburguer total: ${preco * quant}`
        case 400:
            preco = 7.50
            return `Bauru total: ${preco * quant}`
        case 500:
            preco = 3.50
            return `Refrigerante total: ${preco * quant}`
        case 600:
            preco = 2.80
            return `Suco total: ${preco * quant}`
    }

}

console.log(cardapio(100, 2))
console.log(cardapio(600, 2))