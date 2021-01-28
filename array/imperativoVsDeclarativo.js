const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo (focado em como esta sendo feito)
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativo (focado em o que esta sendo feito)
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log( total2 / alunos.length)

// select codigo, nome, email from cliente where ativo = 1 
// SQL é uma linguagem declarativa
