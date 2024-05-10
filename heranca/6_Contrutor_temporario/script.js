function Veiculo () {}

    Veiculo.prototype.carenagem = 'aço';
    Veiculo.prototype.ligar = function(){
        console.log("O veiculo ligou");
    }

function Trem(tipo){
     this.tipo = tipo;
    }

Trem.prototype.vagoes = 50;
    
function Carro(){}

Carro.prototype.pneus = 4;

// copiando só o prototype, em vez de instanciar uma classe

Trem.prototype = Veiculo.prototype;

// contrtutor temporario
let f = function(){
    f.prototype = Veiculo.prototype;
Carro.prototype = new f;
}

let trembala = new Trem("Trem bala");
let ferrari = new Carro();
let trem = new Carro();

Carro.prototype.ligar = function(){
    console.log('Carro ligado');
}

trembala.ligar();
ferrari.ligar();
trem.ligar();