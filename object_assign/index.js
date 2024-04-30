let pessoa = {
    nome: "Jonathan",
    getNome(){
        console.log("Esse e o nome do obj: " + this.nome);
    }
};


let pessoa2 = {
    nome: "Paulo",
    age: 12
};

Object.assign(pessoa2, pessoa);

console.log(pessoa2);


pessoa2.getNome();