const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const horaBrazil = Number(frm.inHora.value)
//calculo
    let Fuso = horaBrazil + 5
    if (Fuso > 24){
    Fuso = Fuso - 24
    }
    resposta.innerText = `Hora na Franç: ${Fuso.toFixed(2)}`
})