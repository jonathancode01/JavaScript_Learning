function extend(Filho, Pai){
    let paiProto = Pai.prototype;
    let filhoProto = Filho.prototype;
    for(let i in paiProto){  
        filhoProto[i] = paiProto[i];
    }
    filhoProto.uber = paiProto;
}


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



// contrtutor temporario por função
extend(Trem, Veiculo);
extend(Carro, Veiculo);

let trembala = new Trem("Trem bala");
let ferrari = new Carro();
let trem = new Carro();

Carro.prototype.ligar = function(){
    console.log('Carro ligado');
}

Trem.prototype.ligar = function(){
    console.log('Piuiiiiiiiiiiiiiii');
}

trembala.ligar();
ferrari.ligar();
trem.ligar();
