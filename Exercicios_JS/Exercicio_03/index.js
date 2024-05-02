function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;

    this.atirarArma = function(){
        console.log('O ninja atirou a ' + this.arma);
    };
}

let jonathan = new Ninja ('Jonathan', 'Shuriken');

console.log(jonathan.nome);

jonathan.atirarArma();

// com ajuda do constructor function consegui criar um objeto e criei 
// metodos e propriedades nele