let pessoa = {
    nome: "Matheus",
}

// pessoa -> Object

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'));


console.log(Object.getOwnPropertyDescriptor(window, 'scrollX'));