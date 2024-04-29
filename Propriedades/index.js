let carro = {
    portas: 4,
    cor: "vermelho"
}

console.log(carro.portas);
console.log(carro.cor);

if(carro.portas > 2){
    console.log("Ok");
}

let pessoa = {
    nome: "Jonathan"
}

console.log(pessoa['nome']);

let nomePessoa = pessoa['nome'];
console.log(nomePessoa.length);