let equipamentosDoCaro = {
    preco: 100000,
    calota: true,
    cor: 'preto',
    aro: 16,
}


function Carro(marca){ // Definição do construtor Carro
this.marca = marca;
}

Carro.prototype = equipamentosDoCaro;

let fusca = new Carro('VW');

console.log(fusca.preco);

console.log(equipamentosDoCaro.isPrototypeOf(fusca));