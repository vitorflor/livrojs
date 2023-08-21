const frm = document.querySelector("form")
const resp1 = document.querySelector("outResp1")
const resp2 = document.querySelector("outResp2")
const resp3 = document.querySelector("outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const velpermitida = Number(frm.inVelpermitida.value)
    const velcondutor = Number(frm.inVelcondutor.value)
    //calculo
    if(velcondutor - velpermitida >= 0) {
        resp1.innerText = `Situação: Sem multa`
    } else if(velcondutor - velpermitida >)
})