// function 

function teste(a){
    return a;
}

console.log(teste('opa'));

test2 = new Function(
     'a',
     'return arguments'
);

console.log(test2('retornando')[0]);