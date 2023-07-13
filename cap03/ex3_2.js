const prompt = require("prompt-sync")()   //adiciona pacote para entrada de dados
const veiculo = prompt("veiculo: ")       //le os dados de entrada
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.50
const parcela = (preco * 0.50) / 12
console.log(`promoção: ${veiculo}`)
console.log(`entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)