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
    Veiculo.prototype.itens = ['tetoSolar','blindagem', 'motor turbo'];
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

Trem.prototype.itens.push('ar-condicionado'); // adicionando novas propriedades ao prototype = 50;


let trembala = new Trem("Trem bala");
let trem = new Trem('Trem');
let ferrari = new Carro();

Carro.prototype.ligar = function(){
    console.log('Carro ligado');
}

Trem.prototype.ligar = function(){
    console.log('Piuiiiiiiiiiiiiiii');
}

trem.ligar();
trembala.ligar();
ferrari.ligar();

console.log(trem);

Veiculo.prototype.carenagem = 'aço 2';