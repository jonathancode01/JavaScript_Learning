function Veiculo () {}

    Veiculo.prototype.carenagem = 'aço';
    Veiculo.prototype.ligar = function(){
        console.log("O veiculo ligou");
    }

function Trem(tipo){
     this.tipo = tipo;
    }

Trem.prototype.vagoes = 50;
    
function Carro(){
}

Carro.prototype.pneus = 4;

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let trembala = new Trem("Trem bala");
let ferrari = new Carro();


