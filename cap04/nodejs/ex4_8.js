const prompt = require("prompt-sync")()
const compra = Number(prompt("valor da compra:"))
const aux = Math.floor(compra / 20)
let parcelas
if(aux == 0) {
    parcelas = 1
} else if(aux >=6){
    parcelas = 6
} else {
    parcelas = aux
}
const valorparcela = compra / parcela
console.log(`Pode pagar em ${parcela} de ${valorparcela.toFixed(2)}`)