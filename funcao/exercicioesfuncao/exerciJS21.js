function planodesaude (idade) {
    if (idade < 10){
        preco = 100 + 80
        return `O preço do seu convenio será R$ ${preco},00.`
    } else if (idade < 30) {
        preco = 100 + 50
        return `O preço do seu convenio será R$ ${preco},00.`
    } else if (idade < 60) {
        preco = 100 + 95
        return `O preço do seu convenio será R$ ${preco},00.`
    } else{
        preco = 100 + 130
        return `O preço do seu convenio será R$ ${preco},00.`
    }
}

console.log(planodesaude(8));
console.log(planodesaude(15));
console.log(planodesaude(35));
console.log(planodesaude(52));
console.log(planodesaude(80));
