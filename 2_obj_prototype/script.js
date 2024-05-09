function Carro(marca, preco){ // Definição do construtor Carro
    this.marca = marca;
    this.preco = preco;
}
// Protótipo do objeto Carro
Carro.prototype.rodas = 4; // metodo ou pode ser uma propriedade
Carro.prototype.ligar = function(){ // metodo
    console.log('Carro ligado');
}

// Instanciação de um objeto Carro
let bmw = new Carro('BMW', 100000);


// Acesso a propriedades do objeto bmw
console.log(bmw);

console.log(bmw.rodas);

bmw.ligar(); // chama o metodo ligar para instancia BMW