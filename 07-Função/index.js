/*
    Functions - Funções

    Trecho de código que é executado somente quando chamado.

    Podem ser reutilizadas em diferentes partes do código.

    Podem receber parâmetros e retornar valores.
*/

function meuNome(nome = "Usuário"){ // valor padrão "Usuário" se nenhum nome for passado
    console.log(`Meu nome é ${nome}`)
}

meuNome("João") // Chamada da função com o parâmetro "João";

function soma(valor1, valor2){
    console.log(`A soma de ${valor1} + ${valor2} é igual a ${valor1 + valor2}`)
}

soma(10, 99);