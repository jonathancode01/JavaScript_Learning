// Crie um objeto Inimigo, com as propriedades nome e vivo (que é um boolean e inicie como true);
// O método atirarShuriken do exercício passado deve ‘matar’ o Inimigo, setando a propriedade do Inimigo vivo como false;

function Jonathan(nome, qtd){
    this.nome = nome;
    this.coldre = qtd;
    this.atirarBala = function(inimigo){
        if(this.coldre > 0) {
            console.log("Pow Poew POw");
            this.coldre -= 1;
            inimigo.vivo = false;
        }else{
            console.log("Acabou as balas")
        }
    }
}

function Inimigo(nome){
    this.nome  = nome;
    this.vivo = true;
}

let orochimaru = new Jonathan('Orochmaru');


let jonathan = new Jonathan ('Jonathan', 3);

console.log(jonathan);

console.log(orochimaru);

jonathan.atirarBala(orochimaru);
jonathan.atirarBala(orochimaru);
jonathan.atirarBala(orochimaru);
jonathan.atirarBala(orochimaru);


console.log(orochimaru);