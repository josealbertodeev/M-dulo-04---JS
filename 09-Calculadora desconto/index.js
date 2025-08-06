/*
    Calculadora de Desconto
    Todos os Produtos acima de R$ 30,00 Terão desconto de 10%
*/

const valorDosProdutosCompra = [10, 244, 34, 51, 77]; // R$ Reais

function calculadoraDesconto(valor, desconto) {
    const resultado = (valor * desconto) / 100;
    return resultado;
}

let valorFinal = 0;
let somaTotalDaCompra = 0;
let ValorEconomizado = 0;
let valorComDesconto = 0;

valorDosProdutosCompra.forEach(valor => {

    if (valor > 30) {
        const desconto = calculadoraDesconto(valor, 10);
        valorComDesconto += (valor - desconto);
        
    } else {
        valorFinal += valor;
    }

    somaTotalDaCompra += valor;
    ValorEconomizado = somaTotalDaCompra - valorComDesconto;

});

console.log(`O valor final da compra foi de R$ ${somaTotalDaCompra.toFixed(2)}, porém você teve desconto, irá pagar apenas R$ ${(valorComDesconto.toFixed(2))}, você economizou R$ ${ValorEconomizado.toFixed(2)} Reais.`);


