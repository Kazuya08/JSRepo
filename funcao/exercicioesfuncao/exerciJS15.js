function revenda(carro) {
    switch(carro){
        case 'hatch':
            return "Compra efetuada com sucesso"
        case 'sedan': 
        case 'motocicleta': 
        case 'caminhonetes':
            return "Tem certeza que não prefere este modelo?"
        default:
           return "Não trbalhamos com este tipo de automóvel aqui"
    };
};

console.log(revenda('hatch'))
console.log(revenda('sedan'))
console.log(revenda('motocicleta'))
console.log(revenda('caminhonetes'))
console.log(revenda('porche'))