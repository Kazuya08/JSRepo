let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//função com apenas um bloco 
dobro = a => 2 * a // return esta implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'  // possui um parametro
console.log(ola())