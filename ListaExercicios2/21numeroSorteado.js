function funcaoDaSorte (numero){
    const min = 1
    const max = 10
    const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min)
   

        return (numero === numeroRandom) ?
        `Parabéns! O número sorteado foi o ${numeroRandom}` :
        `Que pena! o número sorteado foi o ${numeroRandom}`
    
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))