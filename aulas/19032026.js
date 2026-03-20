// Revisão

//Tipos primitidos

//Números
let numero = 30
let dacimal = 20.30

//String
let nome = "Não sei, vocễ não sabe?"
let nome1 = "NÂO SEI, VOCÊ NÃO SABE?"

console.log(nome === nome1); // false

const inputMinusculo = nome1.toLowerCase();

console.log(nome === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


// Booleanos

let nv = true;
let nz = false;

if(nv!==nz){
    console.log('nv é diferente, pois ele é ${nv}')
}
