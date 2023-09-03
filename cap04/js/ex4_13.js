const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)
    //calculo
    if (ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA) {
        alert("Lados não podem formaum triângulo")
        frm.inLadoA.focus()
        return
    } 
    if (ladoA === ladoB && ladoA === ladoC && ladoC === ladoB){
        resp1.innerText= `Lados podem formar um triângulo`
        resp2.innerText= `Tipo: Eequilátero`
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoC !== ladoB) {
        resp1.innerText= `Lados podem formar um triângulo`
        resp2.innerText= `Tipo: Escaleno`
    } else {
        resp1.innerText= `Lados podem formar um triângulo`
        resp2.innerText= `Tipo: Isósceles`
    }
})