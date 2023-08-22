const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const velpermitida = Number(frm.inVelpermitida.value)
    const velcondutor = Number(frm.inVelcondutor.value)
    const maisVinte = VelPermitida * 1.20
    //calculo
    if(velcondutor - velpermitida >= 0) {
        resp.innerText = `Situação: Sem multa!`
        resp.style.color = "blue"
    } else if (VelCondutor <= maisVinte) {
        resp.innerText= `Situação: Multa Leve!`
    } else
        resp.innerText= `Situação: Multa grave!`
})