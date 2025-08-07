// Arrow Functions - Funções de Flecha

// function padrão -> function(){}
// arrow function -> () => {}

// Não escrevemos Function 
// Além DynamicsCompressorNode, usamos o sinal " => " para definir a função
// o que lembra uma flecha
// e por isso o nome Arrow Function

// Sintaxe

// const nomeDaFuncao = (parametros) => {
//     // bloco de código
// }

const nome = (name) => {
    console.log(`Olá, ${name}!`);
}

nome('DevClub');

const soma = (a, b) => a + b;

console.log(soma(5, 3)); // 8