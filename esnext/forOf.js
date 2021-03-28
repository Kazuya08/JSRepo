for (let letra of "Cod3r") {
  console.log(letra);
}

const assuntoEcma = ["Map", "Set", "Promise"];

console.log("--------------------------");
console.log("for in percorre indice da array");
console.log("   ");

for (let i in assuntoEcma) {
  console.log(i);
}

console.log("--------------------------");
console.log("For of percorre valor da array");
console.log("   ");

for (let assunto of assuntoEcma) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

console.log("--------------------------");
console.log("Percorrendo chave e valor for of");
console.log("   ");

for (let assunto of assuntosMap) {
  console.log(assunto);
}

console.log("--------------------------");
console.log("Percorrendo chaves");
console.log("   ");

for (let chave of assuntosMap.keys()) {
  console.log(chave);
}
console.log("--------------------------");
console.log("Percorrendo valor");
console.log("   ");

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

console.log("--------------------------");
console.log("percorrendo chave e valor com destruturação");
console.log("   ");

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}

const s = new Set(["a", "b", "c"]);
for (let letra of s) {
  console.log(letra);
}
