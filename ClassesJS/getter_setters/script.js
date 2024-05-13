class humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    nomeDaPessoa(){
        return 'Sr. ' + this.nome;
    }

    set mudarNomeDaPessoa(nome){
        this.nome = 'O nome da pessoa é: ' + this.nome;
    }

    get receberNomePessoa(){
        return "O nome da pessoa é: " + this.nome;
    }
}

 console.log( typeof humano );


 let jonathan = new humano('Jonathan', 18);

 console.log(jonathan);

console.log(jonathan.nomeDaPessoa());


jonathan.mudarNomeDaPessoa = 'Jonathan';

console.log(jonathan.nome);

console.log(jonathan.receberNomePessoa);