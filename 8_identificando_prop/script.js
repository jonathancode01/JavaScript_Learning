function Carro(marca, preco){ // Definição do construtor Carro
    this.marca = marca;
    this.preco = preco;
    this.calota = true; // comentar para teste
}

Carro.prototype.cor = 'preto';
Carro.prototype.calota = false; // comentar para teste

let fusca = new Carro('VW', 80000);


if(fusca.hasOwnProperty('calota')){
    console.log('A propriedade calota e do objeto');
}else if(fusca.constructor.prototype.hasOwnProperty('calota')){
    console.log('A propriedade calota e do prototype');
}else{
    console.log('A propriedade não existe');
}