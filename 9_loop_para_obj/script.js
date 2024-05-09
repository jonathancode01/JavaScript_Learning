function Carro(marca, preco, cor, aro){ // Definição do construtor Carro
    this.marca = marca;
    this.preco = preco;
    this.calota = true; // comentar para teste
    this.cor = cor;
    this.aro = aro;
}

let fusca = new Carro('VW', 80000, 'preto', 20);

for(prop in fusca){
    console.log(prop + ' => ' + fusca[prop]);
}


// obj['prop']
// obj.prop