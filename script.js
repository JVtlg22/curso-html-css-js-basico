// Ola mundo
console.log('Salve, mundo')

// Função responsavel por carregar o HTML e mostrar no container
function carregarPagina(pagina){ 
    fetch(pagina)
    . then((Response)=>Response.text())
    .then((html) =>{
        document.getElementById('content').innerHTML = html
    })
    .catch((error) => console.error("Erro ao carregar pagina: ",error))
    
}