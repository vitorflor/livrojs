//criar referencia ao form e aos elemntos h3 e h4(resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// criar um "ouvinte" de evento, aconando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value       //obtém cinteúdo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60)  //arredonda para baixo o resultado
    const minutos = duracao % 60            //obtém o resto da divisão

    resp1.innerText = titulo                //exibe as respostas
    resp2.innerText = `${horas} hora(s) e ${minutos} minutos(s)`

e.preventDefault()                          //evita o envio do form
})