function testetriangulos(lado1, lado2, lado3) {

        if(lado1 == lado2 && lado2 == lado3){
            console.log("Este e um triângulo Equilátero")

         }else if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
            console.log("Este é um triângulo Escaleno")

         }else if(lado1 == lado2 || lado1 == lado3 || lado3 == lado2){
            console.log("Este é um triângulo Isósceles")

         }else {
            console.log("Está figura não representa um triângulo")
         }

}

function triangulos(lado1, lado2, lado3) {

    if(lado1 == lado2 && lado2 == lado3){
        console.log("Este e um triângulo Equilátero")

     }else if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
        console.log("Este é um triângulo Escaleno")

     }else{
        console.log("Este é um triângulo Isósceles")
     }
}

//Equilátero
triangulos(2, 2, 2)
//Escaleno
triangulos(1, 2, 3)
//Isósceles
triangulos(2,2,3)
