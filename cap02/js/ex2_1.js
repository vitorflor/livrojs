//criar refêrencia ao form e ao elemento h3 ( onde será exibido a resposta)
    const form = document.querySelector("form")
    const resp = document.querySelector("h3")
//criar um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
const nome = frm.inNome.value   //obtém o nome digitando no form
resp.innerText= 'Olá ${nome}'   //exibe a resposta do programa