/*
FOR

1 - INICIALIZAÇÃO - Cria uma variavel e colocar um valor inicial pra ela
2 - CONDIÇÃO - Enquanto essa variável for verdadeira, o bloco de código será executado
3 - INCREMENTO - Alterar o valor da variavel

for (inicialização; condição; incremento) {
    // bloco de código a ser executado
}

*/

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Pera'];

// Exemplo de for com array
// length - Tamanho do array
for ( let i = 0 ; i < frutas.length; i++){
    console.log(`Indice: ${i}, Fruta: ${frutas[i]}`)
}

