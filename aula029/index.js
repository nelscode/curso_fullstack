// Mais diferenças entre var, let e const

// Declarações
var nome = 'Nelson'
var nome = 'Nelson' // Podemos redeclarar uma variavel criada com 'var'

let nome2 = 'Nelson'
// let nome2 = 'Nelson Martins' - Isso não pode ser feito, o código vai dar erro

const nome3 = 'Nelson' // Constantes não podem ter seus valores mudados e não podem ser redeclaradas
// const nome3 = 'Nelson Martins' - Isso também não pode ser feito

// let possui escopo de bloco {... bloco}
const verdadeiro = true

if(verdadeiro){ // Aqui vamos exibir o valor de cada uma das variaveis
    console.log(nome, nome2)
}

if(verdadeiro){
    let nome = 'Maria' // A diferença vai vir aqui, pois, let possui escopo de bloco, logo, dentro de cada bloco podemos ter uma variavel com nome 'nome'
    console.log(nome, nome2) // resultado diferente
}

if(verdadeiro){
    let nome = 'Maria' // declarando em outro escopo
    console.log(nome, nome2)

    if(verdadeiro){
        let nome = 'Nelson' // declarando em outro escopo
        console.log(nome, nome2)
    }
}

// var
var nome = 'Maria' // var no escopo global

if(verdadeiro){
    console.log(nome) // exibindo
}

if(verdadeiro){
    console.log(nome)
    var nome = 'Nelson' // ela vai redeclarada
    console.log(nome) // outro resultado

    if(verdadeiro){
        var nome = 'Maria' // vai ser redeclarada
    }
}

console.log(nome) // a prova de que foi redeclarado

// var - escopo de função 

var nomeComposto = 'Nelson Martins' // escopo global

const falaNome = () => {
    return nomeComposto  // a função não possui essa variável, porém, ela vai atrás dessa variavel fora dela
}

let falandoNome = falaNome()
console.log(falandoNome)

const falaNome2 = () => {
    var nomeComposto2 = 'Nelson Martins' // essa variável tem escopo de função, só pode ser mexida dentro dela
    return nomeComposto2
}
// console.log(nomeComposto2) // isso vai dar erro, não vai ser possivel acessar uma váriavel de dentro da função mesmo que ela tenha sido criada por var
console.log(falaNome2()) // somente dessa forma


// Elevação de função

console.log(testando())
function testando() { //  funções criadas com function podem ser utilizadas antes mesmo de serem criadas
    return 'testando'
}