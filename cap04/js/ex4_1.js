const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    //calculo
    const media = (nota1 + nota2) / 2
    //resposta da media
    resp1.innerText = `media da(o) ${nome} é: ${media.toFixed(2)}`
    //cria as condições
    if (media >= 7) {
    resp2.innerText = `Parabens ${nome} você foi aprovado(a)`
    //resp2.style.color = "green"
    } else if (media>=4) {
        resp2.innerText = `Você está em exame`
       // resp2.style.color = "yellow"
    } else{
        resp2.innerText = `Voce foi reprovado(a)`
        //resp2.style.color = "red"
    }
})