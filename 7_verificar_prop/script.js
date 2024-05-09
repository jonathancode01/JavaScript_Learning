function Carro(marca, preco){ // Definição do construtor Carro
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
}

Carro.prototype.cor = 'preto';
Carro.prototype.calota = false;

let fusca = new Carro('VW', 80000);

console.log(fusca.hasOwnProperty('marca'));
console.log(fusca.contructor.prototype.hasOwnProperty('marca'));

Carro.prototype.marca = 'teste';

console.log(fusca.constructor.prototype.hasOwnProperty('marca'));