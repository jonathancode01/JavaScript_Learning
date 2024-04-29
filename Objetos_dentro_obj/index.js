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
    },
    caracteristica:{
        cnh: true,
        carteira: ['Dinheiro','Documentos','Moeda']
    }
}

console.log(pessoa.caracteristica);
console.log(pessoa.caracteristica.carteira[1]);

