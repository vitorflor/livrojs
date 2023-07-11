const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    
const terceiroproduto = preco / 2
const promocao = (preco * 2) + terceiroproduto

resp1.innerText = `${produto}-Promoção: Leve 3 por ${promocao.toFixed(2)}`
resp2.innerText = `o terceiro produto custa apenas R$: ${terceiroproduto.toFixed(2)}`

e.preventDefault()      
})