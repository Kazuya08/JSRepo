function negativo (vetor) {
    let qtdnegativo = 0

    for(i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            qtdnegativo++
        }
    }
    console.log(`No vetor tem ${qtdnegativo} números negativos.`)
}

vetor = [0, 1, -1, -2, -3, -5, 7]

negativo(vetor)