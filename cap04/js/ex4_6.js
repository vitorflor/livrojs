const frm = document.querySelector("frm")
const rep1 = document.querySelector("#outResp1")
const rep2 = document.querySelector("#outResp2")
const rep3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const saque = Number(frm.inSaque.value)
    //calculo
    if(saque % 10 != 0) {
        alert("Valor invalido para notas disponiveis(10,50,100)")
        frm.inSaque.focus()
        return
    }
    let notas = Math.floor(saque / 100)
    notas = Math.floor(notas / 50)
    notas = Math.floor(notas / 10)
    if()
})
