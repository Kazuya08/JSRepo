const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores) //mostra a array inteira
console.log(valores.length) //mostra o tamanho da array

valores.push({id: 3}, false, null, 'teste') //push adiciona mais objetos na array
console.log(valores)

console.log(valores.pop()) //pop retira o ultimo valor da array
delete valores[0]
console.log(valores)

console.log(typeof valores) //a array e tipo object

