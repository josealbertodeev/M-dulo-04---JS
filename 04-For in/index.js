// Estrutura de Repetição - Loop
// FOR IN - Percorre os índices ou chaves do objeto

const usuario = {
// chave - valor
    nome: "Beto",
    idade: 22,
    endereco: "Rua 1"
}

// console.log(usuario.nome)
// console.log(usuario['nome'])

     //  Key      Object
for (let chave in usuario) {
    console.log(`${chave}: ${usuario[chave]}`)
}