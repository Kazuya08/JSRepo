// tagged templates - processa o template string dentro de uma função
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra string";
}

const aluno = "thiago";
const situacao = "Aprovado";
console.log(tag`${aluno} está ${situacao}`);
