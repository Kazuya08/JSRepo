let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

// ! é negação 
// !! o segunda exclamação cancelar a anterios 
//abaixo todas as situações verdadeira
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//abaixo todas as situações falsas
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) // a barra || é OU

let nome = ''

console.log(nome || "Desconhecido") // Caso o nome estiver vazia ele faz a operação OU e aparece o "Desconhecido"