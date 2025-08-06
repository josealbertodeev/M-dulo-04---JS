// Selecione o paragrafo, input e o botao
let paragrafo = document.querySelector('p');
let entrada = document.querySelector('input');
let botao = document.querySelector('button');

// Crie um array de objetos contendo nome e numero de cada contato
const contatos = [
    { nome: "Rodolfo", numero: "(11) 99999-9999" },
    { nome: "Ana", numero: "(11) 98888-8888" },
    { nome: "Beto", numero: "(11) 97777-7777" },
    { nome: "Mila", numero: "(11) 96666-6666" },
    { nome: "Victor", numero: "(11) 95555-5555" }
]

// Adicione um evento de click no botao
botao.addEventListener('click', () => {

    // Verifique se o valor eh vazio da entrada
    if (entrada.value === "") {
        // Se sim, mostre um texto de erro
        paragrafo.innerHTML = "Por favor, digite um nome.";
        return;
    }

    // Faça um loop no array de contatos
    for (let i = 0; i < contatos.length; i++) {
        // Verifique se o nome do contato eh igual ao nome da entrada
        if (entrada.value.toLowerCase() === contatos[i].nome.toLowerCase()) {
            // Se sim, mostre o nome e o numero do contato
            paragrafo.innerHTML = `Nome: ${contatos[i].nome} Telefone: ${contatos[i].numero}`;
            // break para sair do loop
            break;
        } else {
            // Caso nao encontre o contato, mostre um texto de erro
            paragrafo.innerHTML = "Contato nao encontrado.";
        }
    }
    
})

