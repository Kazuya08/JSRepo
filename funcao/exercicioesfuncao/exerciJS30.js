function MaiorMenor (vetor){
    let maior 
    let menor 

    for(let i = 0; i < vetor.length; i++){
        if(maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if(vetor[i] > maior){
                maior = vetor[i]
            }
            if (vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    console.log(`O Maior número é ${maior}, o menor número ${menor}`)
}

vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13]
vetor2 = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

MaiorMenor(vetor2);