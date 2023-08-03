const prompt = require("prompt-sync")()
const pesokg = Number(prompt("Peso da ração (Kg): "))
const consumo = Number(prompt("Consumo diário (gr): ")) //consumo diario do gato
const gramas = pesokg * 1000                            //transforma kg em gramas
const duracao = Math.floor(gramas / consumo)
const sobra = gramas % consumo 
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr `)