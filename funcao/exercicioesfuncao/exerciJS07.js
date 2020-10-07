function Bhaskara(a, b, c) {

    let results = []

    let delta = (b ** 2) - (4 * a * c)

    if (delta < 0){

        return `Delta é negativo ${delta}`

    }
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        
        
        results.push(x1)
        results.push(x2)

        return `O resultado da equação é: ${results}`
}

//delta negativo
console.log(Bhaskara(1, 2, 5))

//delta positivo
console.log(Bhaskara(2, -16, -18))

