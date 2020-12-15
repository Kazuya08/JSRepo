function verificacaoDeString (string1, string2){
    let estacontido = true
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2){
                estacontido = true
                break
            }else {
                estacontido = false
            }
        }
        if(!estacontido){
            return estacontido
        }
    }
    return estacontido
}

console.log(verificacaoDeString('abc','cba'))