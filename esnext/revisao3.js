// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); //mostrara as chaves
console.log(Object.values(obj)); //mostrara os valores das chaves
console.log(Object.entries(obj)); //mostrara uma array com chave e valor

// Melhorias na Notação Literal
const nome = "Carla";
const pessoa = {
  nome,
  ola() {
    return "Oi gente!";
  },
};

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {}
class Cachoroo extends Animal {
  falar() {
    return "Au au!";
  }
}

console.log(new Cachoroo().falar());
