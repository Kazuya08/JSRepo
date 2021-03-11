const { set } = require("lodash");

// não aceita repetição/não indexada
const times = new Set();
times.add("Vasco");
times.add("São Paulo").add("Palmeiras").add("Corithians");
times.add("Flamengo");
times.add("Vasco");

console.log(times);
console.log(times.size);
console.log(times.has("vasco"));
console.log(times.has("Vasco"));
times.delete("Flamengo");
console.log(times.has("Flamengo"));

const nomes = ["Bruno", "Rodrigo", "Julia", "Roberto"];
const nomesSet = new set(nomes);
console.log(nomesSet);
