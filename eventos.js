console.log('eventos')
// 
const nomeInput = document.getElementById("nome");
const telefoneInput = document.getElementById("telefone");
const adicionarButton = document.getElementById("adicionar");
const tabelaBody = document.getElementById("tabela-contatos");
// variaveis
const linhas = []

function monstrarMensagem(mensamgem) {
    console.log(mensamgem);
}

nomeInput.addEventListener("input", () => {
    monstrarMensagem(nomeInput.value)
})
nomeInput.addEventListener("focus", () => {
    monstrarMensagem("Cliquei no campo")
})
nomeInput.addEventListener("blur", () => {
    monstrarMensagem("Sai do campo")
})
nomeInput.addEventListener("change", () => {
    monstrarMensagem("Quando eu mudo o valor do campo")
})
nomeInput.addEventListener("keyup", (e) => {
    monstrarMensagem(`apertei ${e.key}`)
})

// Botao adicionar
adicionarButton.addEventListener("click", () => {
    monstrarMensagem("cliquei");
});
// Eventos de mouse
nomeInput.addEventListener("mouseenter", () => {
    monstrarMensagem('o mouse esta em cima do campo')
});
nomeInput.addEventListener("mouseleave", () => {
    monstrarMensagem('o mouse saiu do campo')
});
nomeInput.addEventListener("mousedonw", () => {
    monstrarMensagem('cliquei com o mouse')
});
nomeInput.addEventListener("mouseup", () => {
    monstrarMensagem('soltou o botão do mouse')
});
nomeInput.addEventListener("mouseup", () => {
    monstrarMensagem('soltou o botão do mouse')
});
//botao adicionar
adicionarButton.addEventListener("click", () => {
    monstrarMensagem("cliquei");
    const nome = nomeInput.value
    const telefone = telefoneInput.value
    if (!nome | !telefone) {
        alert("preencha os campos!")
        return
    }
    console.log(`dados: \nNome: ${nome}. \ntelefone: ${telefone}`)

    // "nome" : jota
    linhas.push({ nome, telefone })
    console.log(linhas)
    // limpar formulario
    nomeInput.value = ""
    telefoneInput.value = ""
    nomeInput.focus()
});

