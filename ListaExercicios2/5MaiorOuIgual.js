const maiorOuIgual = function (x, y) {
     if (typeof x != typeof y){
         return false
     } if(x >= y){
        return true
     } else {
         return false
     }
} 


console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))


    