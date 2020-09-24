// Factory simples
function criarPessoa() {
    return {
    nome: 'Ana',
    sobrenome: 'Silva'
    }
    
}

console.log(criarPessoa())

function pessoa(x, y){
    return {
        nome: x,
        sobrenome: y
    };
};

console.log(pessoa('Thiago', 'Kazuya') );