function Ninja(nome, arma){
    this.nome = nome;
    this.arma = arma;
}

const naruto = new Ninja('Naruto', 'Shuriken');
const rocklee = new Ninja('Rock Lee', 'Punho');

const cloneNaruto = new Ninja ('Naruto', 'Shuriken');

const cloneVerdadeiro = (naruto);


console.log(naruto === rocklee);

console.log(naruto === cloneNaruto);

console.log(naruto === cloneVerdadeiro);

console.log(cloneVerdadeiro === naruto);