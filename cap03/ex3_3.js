const prompt = require("prompt-sync")()
const salario = Number(prompt("salário r$: "))
const tempo = Number(prompt("quantos anos você trabalha na empresa(anos): "))
const quatro = Math.floor(tempo / 4)
const acrescimo = salario * quatro / 100
const total = salario + acrescimo
console.log(`Quadrienios: ${quatro}`)
console.log(`Salário final R$: ${total.toFixed(2)}`)