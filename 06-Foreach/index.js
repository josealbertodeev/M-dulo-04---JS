// forEach(item, index, array)

// item = variavel que representa o item atual do array
// index = variavel que representa o indice do item atual do array
// array = variavel que representa o array

// foreach para iterar sobre um array

const usuarios = [
    {nome: 'João', idade: 28, contato: "(11) 99999-9999"},
    {nome: 'Maria', idade: 22, contato: "(11) 98888-8888"},
    {nome: 'Pedro', idade: 35, contato: "(11) 97777-7777"}
]

usuarios.forEach((item, index) => {
    console.log(`Posição: ${index}, Nome: ${item.nome}, Idade: ${item.idade}, Contato: ${item.contato}`)
})