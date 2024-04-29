// criando metodos 
let pessoa = {
    nome: "Jonathan",
    idade: 18,
    falar: function(){
        console.log("Meu nome e Jonathan");
    },
    aniversario(){
        this.idade += 1;
    },
    dizerIdade(){
        console.log("minha idade é: " + this.idade);
    },
        podeDirigir: function(){
            if(this.idade >=18){
            console.log("Apto");   
        }else{
        console.log("Não Apto"); 
        }
    }
}

pessoa.aniversario();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);
pessoa.dizerIdade();
pessoa.podeDirigir();


let calculadora = {
    numero: 0,
    somar: function(a){
        this.numero += a;
    },
    subtracao: function(a){
        this.numero -= a;
    }
}

calculadora.somar(2,4);
console.log(calculadora.numero);
calculadora.subtracao(5);
console.log(calculadora.numero);