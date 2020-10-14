function  venderfruta (fruta){
    switch(fruta){
        case 'maça':
            console.log("Não vendemos está fruta aqui")
            break
        case 'kiwi':
            console.log("Estamos com escassez de kiwis")
            break
        case 'melancia':
            console.log("Aqui está, são três reais o quilo")
            break 
        default:
            console.log("fruta não identificada")

    }
}

venderfruta("maça")
venderfruta("kiwi")
venderfruta("melancia")
venderfruta("banana")