let pessoa = {
    nome: "Jonathan",
    falar: function(){
        console.log("Oi, tudo bom " + this.nome);
    }
}

console.log(pessoa.nome);

pessoa.falar();