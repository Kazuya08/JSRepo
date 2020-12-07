function ParImpar (vetorNum) {
    let qtdPares = 0
    let qtdImpares = 0
    for(let i = 0; i < vetorNum.length; i++){
        if(vetorNum[i] % 2 ==0){
        qtdPares++
         } else {
        qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} númeors de ímpares.`)
}

vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13]
ParImpar(vetor)