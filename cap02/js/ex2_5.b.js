const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const tempodeuso = Number(frm.inTempo.value)
    const preco = Number(frm.inPreco.value)

const valor = Math.ceil(preco / 15) * tempodeuso

resp.innerText = `valor a pagar ${valor.toFixed(2)}`

e.preventDefault()      
})