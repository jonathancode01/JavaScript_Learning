function Jonathan(nome, qtd) {
    this.nome = nome;
    this.coldre = qtd; 
    this.tiros = function(){
        if (this.coldre > 0) { 
            console.log("pow pow pow");

        } else {
            console.log("Acabou as balas")
        }
    }
}


let jonathan = new Jonathan('Jonathan', 3); 

console.log(jonathan);

jonathan.tiros();

console.log(jonathan);

jonathan.tiros();
jonathan.tiros();
jonathan.tiros();


console.log(jonathan);