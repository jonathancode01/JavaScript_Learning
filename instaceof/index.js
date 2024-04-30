function criarArvore (especie, temFruto) {
    return {
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore('Larangeira', true);

function heroi(nome, classe){
    this.nome = nome;
    this.classe = classe;
}

let jaspion = new heroi('Jaspion', 'Robô');


let obj = {
    teste: 'teste',
}

console.log(laranjeira instanceof criarArvore);
console.log(laranjeira instanceof Object);

console.log(jaspion instanceof heroi);

console.log(obj instanceof Object);