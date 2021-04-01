function falarDEpoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    //resolve e se a promessa foi cumprida e o reject quando por algum motivo vc quer rejeitar a promessa
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDEpoisDe(3, "Que legal")
  .then((frase) => frase.concat("?!?"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e));
//catch ele é executado para tratar o erro ele excuta o que esta dentro do reject
