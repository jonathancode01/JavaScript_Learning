function criarArvore(especie, temFruta){
    return {
        especie: 'especie',
        temFruta: 'temFruta'
    }
}

let laranjeira = criarArvore('Larangeira', true)


console.log(laranjeira);
console.log(laranjeira.constructor);


function Heroi (nome, classe){

    this.nome = nome,
    this.classe = classe;
}

let jaspion = new Heroi('jaspion', 'robô');

console.log(jaspion);