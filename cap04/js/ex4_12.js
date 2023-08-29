const frm = document.querySelector("form")
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault() 
    const valor = Number(frm.inValor.value)
    if (valor > 1) {
        alert("Valor Invalido")
        frm.inValor.focus()
        return
    }
    const troco1 = valor - 1 
    const troco2 = valor - 1.75
    const troco3 = valor - 3
    if(valor <= 1) {
        resp1.innertext= `tempo: 30min`
        resp2.innertext= `troco: ${troco1.toFixed(2)}`
    } else if(valor <= 1.75) {
    resp1.innertext= `tempo: 30min`
    resp2.innertext= `troco: ${troco2.toFixed(2)}`
    } else if(valor <= 3){
    resp1.innertext= `tempo: 30min`
    resp2.innertext= `troco: ${troco3.toFixed(2)}`
    }
})