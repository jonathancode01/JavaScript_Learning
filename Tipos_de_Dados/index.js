// retorna o objeto 

function criarCarro(modelo, portas, aro, tetoSolar){

    return{
        modelo: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,
        ligarCarro: function(){
            console.log("Ligou");
        },
        temTetoSolar: function(){
            if (this.tetoSolar == true) {
                console.log("Tem teto solar")
            } else {
                console.log("Não tem teto solar")
            }
        }
    }
}

let ferrari = criarCarro('Ferrari', 4, 18, true);
console.log(ferrari.modelo);

let BMW = criarCarro('BMW', 2, 18, false);

ferrari.ligarCarro();
ferrari.temTetoSolar();
console.log(BMW.modelo);