const prompt = require("prompt-sync")()
const numero = Number(prompt("Número(centena): "))
if(numero < 100 || numero >= 100) {
console.log("Erro... deve ser uma centena")
return
}
const num1 = Math.floor(numero / 100)
const sobrea = numero % 100
const numero2 = Math.floor(sobra/ 10)
const numero3 = sobra % 10 
console.log(`Invertido: ${numero3}${numero2}${numero1}`)