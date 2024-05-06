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


dog.auau(gato);
dog.auau(gato);
dog.auau(gato);
dog.auau(gato);

