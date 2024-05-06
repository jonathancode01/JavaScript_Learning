// Crie um objeto Inimigo, com as propriedades nome e vivo (que é um boolean e inicie como true);
// O método atirarBala do exercício passado deve ‘matar’ o Inimigo, setando a propriedade do Inimigo vivo como false;

function Bruxo(nome, qtd){
    this.nome = nome;
    this.magiaqtd = qtd;
    this.feitico = function(inimigo){
        if (this.magiaqtd > 0) {
            console.log("Specto Patronum");
            this.magiaqtd -= 1;
            inimigo.vivo = true;
        } else {
            console.log("Avada Kedavra");
        }
    }
}

function Voldemort(nome){
    this.nome = nome;
    this.vivo = false;
}

let bruxo = new Bruxo('Harry Potter', 3);
let voldemort = new Voldemort('Voldemort'); 

bruxo.feitico(Voldemort);
bruxo.feitico(Voldemort);
bruxo.feitico(Voldemort);
bruxo.feitico(Voldemort);

console.log(voldemort);

// Método atirarBala sendo chamado: O método atirarBala do objeto jonathan é chamado quatro vezes, 
// passando orochimaru como argumento. Isso simula Jonathan atirando em Orochimaru.


