// setTimeout(function () {
//   console.log("Executando callback...");

//   setTimeout(function () {
//     console.log("Executando callback...");

//     setTimeout(function () {
//       console.log("Executando callback...");
//     }, 2000);
//   }, 2000);
// }, 2000);

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executando promise...");
      resolve(); //quando o resolve e chamado ele chama o then
    }, tempo);
  });
}

esperarPor()
  .then(() => esperarPor())
  .then(() => esperarPor());
