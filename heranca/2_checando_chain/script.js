function Veiculo () {
    this.carenagem = 'aço';
    this.ligar = function(){
        console.log("O veiculo ligou");
    }
}

function Trem(tipo){
     this.tipo = 'trem';
     this.vagoes = 50;
}

function Carro(){
    this.pneus = 4;
}

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let trembala = new Trem("Trem bala");
let ferrari = new Carro();

console.log(trembala instanceof Trem);
console.log(ferrari instanceof Carro);

console.log(trembala instanceof Veiculo);
console.log(ferrari instanceof Veiculo);
