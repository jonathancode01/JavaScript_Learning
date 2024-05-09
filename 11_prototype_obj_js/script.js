Array.prototype.checkLength = function(){
    return this.length;
}
Array.prototype.somaDosPrimeiros = function(){
    return this[0] + this[1];
}

let a = [1,2,3,4,5,6,7];

let b = [12,2,4];

console.log(a.checkLength());
console.log(b.checkLength());

console.log(a.somaDosPrimeiros);
