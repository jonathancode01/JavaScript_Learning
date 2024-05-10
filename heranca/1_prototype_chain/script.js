function Veiculo () {
    this.carenagem = 'aço';
    this.ligar = function(){
        console.log("O veiculo ligou");
    }
}

function Trem(){
     this.tipo = 'trem';
     this.vagoes = 50;
}

Trem.prototype = new Veiculo();

let trembala = new Trem("Trem bala");

console.log(trembala.tipo);


trembala.ligar();