// REST

const usuario = {
    nome: 'Lucas',
    idade: 19,
    faculdade: 'UFABC'
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

function soma (...params){
    return params.reduce((total,next) => total+next);
}

console.log(soma(1,3,4));

// SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3)