// contador negativo

let contador = 100
contador--;

console.log("O resultado do decremento é: " + contador);

// interpolação

const nome = "kayo";
console.log(`olá, ${nome}! bem vindo ao nosso sistema.`)

// interpolação com operações matemática

const a = 5;
const b = 3;

console.log(`A soma de ${a}+${b} é ${a+b}.`);

// interpolação dentro de um objetos

const usuario = {
    nome:"cleitinho do grau",
    idade:30,
    cidade: "Rio de janeiro"
};

console.log(`O cliente ${usuario.nome} possui ${usuario.idade} anos e mora no ${usuario.cidade}.`)