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

