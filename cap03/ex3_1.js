const prompt = require("prompt-sync")()  //adiciona pacote para entrada de dados
const num1 = Number(prompt("1 numero: ")) //lê os numeros
const num2 = Number(prompt("2 numero: "))
const soma = num1 + num2                  //calcula a soma
console.log (`Soma é: ${soma}`)           //exibe o resultadols