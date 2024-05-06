function compareObj(obj1, obj2){
    if (obj1 instanceof obj2) {
        console.log("O objeto " + obj1.nome + " e uma instancia do " + obj2.name);
    } else {
        console.log("O objeto " + obj1.nome + " não e uma instancia do " + obj2.name)
        }
}


// objetos 
function Dog (nome, qtd){
    this.nome = nome;
    this.latiQtd = qtd;
    this.auau = function(gato){
        if(this.latiQtd > 0){
            console.log('AUAUAUAUAU');
            gato.vivo = false;
            this.latiQtd -= 1;
        }else{
            console.log("Caimcaimcaimcaim")
        }
    }
}

function Gato(nome){
    this.nome = nome;
    this.vivo = false;
}

let dog = new Dog ('Caramelo', 3);
let gato = new Gato ('Xaninho');


compareObj(dog, Dog);
compareObj(gato, Dog);
