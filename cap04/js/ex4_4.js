const form = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const horaBrazil = frm.inHora.value

    const Fuso = Number(horaBrazil + 5)
})