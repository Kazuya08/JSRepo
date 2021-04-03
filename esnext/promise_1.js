const { resolve } = require("node:path");

const primeiroELemento = (array) => array[0];

const primeiraLetra = (string) => string[0];

const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (resolve) {
  resolve(["ana", "Bia", "Carlos", "Daniel"]);
})

  .then(primeiroELemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  //.then(valor => console.log(valor));
  .then(console.log);
