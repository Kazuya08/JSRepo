function intervalo (vetor) {

    let dentro = 0
    let fora = 0

    for (i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            dentro++
        } else {
            fora++
        }
    }
    console.log(`no intervalo de 10 a 20 tem ${dentro} números, e tem ${fora} fora do intervalo.`)
}

vetor = [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

intervalo(vetor)