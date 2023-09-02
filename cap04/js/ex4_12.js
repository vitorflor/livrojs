const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    //calculo
    if (valor < 1) {
        alert("valor invalido! só coloque valores acima de 1")
        frm.inValor.focus()
        return
    }
    const troco1 = valor - 1
    const troco175 = valor - 1.75
    const troco3 = valor - 3
    if(valor >= 1 && valor < 1.75) {
        resp1.innerText= `Tempo: 30 minutos`
        resp2.innerText= `Troco R$: ${troco1.toFixed(2)}`
    } else if(valor >= 1.75 && valor < 3) {
        resp1.innerText= `Tempo: 60 minutos`
        resp2.innerText= `Troco R$: ${troco175.toFixed(2)}`
    } else {
        resp1.innerText= `Tempo: 120 minutos`
        resp2.innerText= `Troco R$: ${troco3.toFixed(2)}`        
    }
})