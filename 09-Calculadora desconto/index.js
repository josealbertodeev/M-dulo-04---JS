/*
    Calculadora de Desconto
    Todos os Produtos acima de R$ 30,00 Terão desconto de 10%
*/

const valorDosProdutosCompra = [10, 244, 34, 51, 77]; // R$ Reais

function calculadoraDesconto(valor, desconto) {
    const resultado = (valor * desconto) / 100;
    return resultado;
}

valorFinal = 0;
valorDosProdutosCompra.forEach(valor => {

    if (valor > 30) {
        const desconto = calculadoraDesconto(valor, 10);
        valorFinal += (valor - desconto);
    } else {
        valorFinal += valor;
    }
});

console.log(valorFinal)


