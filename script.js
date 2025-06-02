// Mostrar mensamgem 
console.log('So salvinho pros guri da catequese')
/**
 * Comentario mais longos
 */
/**
 * variaveis
 */
let nome = 'jota' //texto
let sobrenome = "VIRTO" //texto
let idade = 18 //tipo inteiro
let possuiCNH = true //tipo boolean
let jogaFreefire = false //tipo boolean
let altura = 1.70 //tipo number, decimal ou floa
let indefinido = undefined //tipo indefinido
let none = null //tipo nulo

console.log(nome, sobrenome, idade, possuiCNH)



nome = "jota 'JV'"
console.log(nome)
/**
 * Constantes
 */
const PI = 3.14
console.log(PI)
/**
 * Operacoes basicas de matematica
 */
let a = 10
let b = 20
let soma = a + b
let subtracao = b - a
let dividir = b / a
let multiplicar = a * b
let potencia = a ** 2
let resto = b % a
console.log(soma, subtracao, dividir,)
console.log(multiplicar, potencia, resto)
/**
 * Manipulacao de texto
 */
let concatenar = "ola " + nome + ", seja..."
console.log(concatenar)
let ideal = `ola, ${nome}, seja...crase`
console.log(ideal)
console.log(nome.length)//tamanho
console.log(nome.toUpperCase()) //maiusculo
console.log(nome.toLowerCase())//minusculo
//Pesquisar se possui partes de 
console.log(nome.includes("jota"))
//localizar indice
console.log(nome.indexOf('t'))//primeiro
console.log(nome.lastIndexOf('a'))//ultimo
//substituir
console.log(nome.replace('JV', 'jota virto'))
//extrair parte do texto
console.log(nome.slice(2, 4))
//Remover espaços varios do inicio e fim
console.log("Agua de beber ".trim())
/**
 * Operadoes logicos
 */
//Tipo de variavel
console.log(typeof (nome))
console.log(typeof (altura))
//igual
console.log(2 == '2')
//igual e do mesmo tipo
console.log(2 === '2')
//Maior
console.log(2 > '2')
//Maior ou igual
console.log(4 >= 3)
//menor
console.log(5.9 < 6)
//menor ou igual
console.log(6 <= 6)
//diferente
console.log(6 != 6)
console.log(6 !== 6)
/**
 * Funções 
 */
function statusNota(nota) {
    //controle de fluxo
    let msg = "não informado";
    if (nota => 6) {
        msg = "aprovado"
    }
    else if (nota >= 5) {
        msg = "Recuperação"
    } else {
        msg = "Reprovado"

    }
    console.log(msg)
}

let status = statusNota(5.6)
console.log

let nota = 5.6
let presenca = 90
if (nota >= 6 & presenca >= 75) {
    console.log('aprovado')
} else {
    console.log('Reprovado')
}
let finaldocurso = true
let liberoumaiscedo = false

if (finaldocurso | liberoumaiscedo) {
    console.log('hora de ir pra casa')
} else {
    console.log('continua o baile')
}

let teste = (nota >= 6 & presenca >= 75) & (finaldocurso | liberoumaiscedo)
console.log(teste)
//0 = false e 1 = True
/**
 * Coleçoes de dados
 */
let frutas = ['maça', 'tomate', 'morango']
console.log(frutas)
//Chamar pelo indice 0,1,2...........
console.log(frutas[1])
//adicionar frutas 
frutas.push("Abacate")
console.log(frutas)
//remover o ultimo
frutas.pop()
//remover o primeiro
frutas.shift()
//colocar no inicio da fila
frutas.unshift('pera')
console.log(frutas)
/**
 * iteração
 */

//Para: percorre uma lista conhecida 
for(let f of frutas){
    console.log(f)
}
for(f in frutas){
    console.log(f)
}
//enquantp nao tiver afim
let contador=0
let regressiva=10
while(contador <=10){
    console.log(contador,regressiva)
    //incrementar
    contador++
    //decrementar
    regressiva--;
}