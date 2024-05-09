function Carro(marca, preco){ // Definição do construtor Carro
    this.marca = marca;
    this.preco = preco;
}


// Protótipo do objeto Carro
Carro.prototype = { // criando um metodo vazio e adicionando metodos ou propriedades a ele 
    rodas: 4,
    portas: 4,
    ligar (){ // metodo ou pode ser uma propriedade
        console.log('Carro ligado');
    }

}; 

// Instanciação de um objeto Carro
let bmw = new Carro('BMW', 100000);


// Acesso a propriedades do objeto bmw
console.log(bmw);

console.log(bmw.rodas);

bmw.ligar(); // chama o metodo ligar para instancia BMW


console.log(bmw.portas);

let ferrari = new Carro('Ferrari', 200000);



// propriedade apos a instancia 

Carro.prototype.tetoSolar = true;

Carro.prototype.abrirtetoSolar = function(){
    console.log("O teto solar")
};

console.log(bmw.tetoSolar); 
ferrari.abrirtetoSolar();

