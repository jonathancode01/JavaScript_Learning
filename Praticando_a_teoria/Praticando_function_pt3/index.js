
let a = {
    nome: "jonathan",
    dizerNome: function(){
        console.log("O nome desse objeto e " + this.nome);
    }
}

let b = {
    nome: "Priscila"
};

let c = {
    nome: "Sofia"
};

a.dizerNome();

a.dizerNome.call(b); // function - call
a.dizerNome.call(c); // 
