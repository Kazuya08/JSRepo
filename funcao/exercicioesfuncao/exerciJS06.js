/*
let capitalInicial = a
let taxaDejuros = b
let tempoDeAplicacao = c
*/

function jurosSimples(a, b, c) {

    b = b/100;
    /*
    let Juros = a * b * c
    let montante = a + Juros*/

    let montante = a + (a * b * c)
    console.log(`O montante produzido é: R$${montante},00.`)
}

function jurosComposto(a, b, c) {
     
    b = b/100;
    let M = a * (1 + b) ** c 
    console.log(`O montante produzido com juros composto é: R$${M.toFixed(2).toString().replace(".", ",")}.`);
}

jurosSimples(1200, 2, 10)
jurosComposto(1200, 2, 10)