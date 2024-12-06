// Funções - Blocos de Código de Executam Ações

// Usamos a palara function para criar uma função e em seguida damos um nome para ela seguido de parenteses, por fim, abrimos os colchetes
function saudacao(){
    // tudo que estiver aqui dentro vai ser executado quando a função for chamada
    console.log('Olá, mundo!')
}

saudacao() // chamando a função

// Adicionando paramêtros

function bomDia(nome){ // Os parametros podem ser qualquer tipo de dado
    console.log(`Bom dia, ${nome}`) // chamamos de nome por que desejamos receber dentro da função o nome de uma pessoa
}

bomDia('Nelson') // chamando a função e passando um valor para o parametro nome
bomDia('Maria') // funções são reutilizaveis e podemos chamar ela quantas vezes desejarmos

// Funções e Undefined

const variavelFuncao = bomDia('Nelson') // Por padrão qualquer função criada em JS retorna como valor: undefined (mesmo que ela seja executada)
console.log(variavelFuncao) // ela vai ser executada mas vai retornar undefined

// Retornando valores com funções (forma ilustrativa)

function boaNoite(nome){
    console.log(`Boa noite, ${nome}`)
    return 'teste' // Utilizamos o return para retornar um valor da função
}

const variavelFuncao2 = boaNoite('Nelson') // agora a variavelFuncao vai armazenar o valor de retorno da função
console.log(variavelFuncao2) // ela vai ser executada e retornar o valor que definimos

// Retornando valores com funções (forma correta)

function bemVindo(nome){
    return `Bem vindo, ${nome}` // agora sim retornamos o valor que desejamos com a função
} // obs: existem funções que não retornam valores

const variavelFuncao3 = bemVindo('Nelson') // tornamos a execução da função o seu proprio valor
console.log(variavelFuncao3) 

// Funções com mais de um parametro

function soma(a, b){ // mais de um parametro, separando por virgulas
    const resultado = a + b // exatamente o que a função 'soma' se propoe a fazer
    return resultado // resultado vai ser o valor retornado pela função
} // obs: programas maiores são somatorios de varias funções que se conversam entre si

const variavelSomada = soma(10, 10) // vamos guardar o retorno da função que vai somar 10 + 10 
console.log(variavelSomada)

// Escopo 

function subtrair(a, b){
    // tudo que está aqui dentro só existe e pertence para a função, não pode ser acessado por fora deste escopo
    const resultado = a - b
    return resultado 
}

// Isso não é possivel: console.log(resultado)
// Isso é possível por que esta fora do escopo da função: const resultado = 0

// O return finaliza tudo! 

function testeReturn(){
    return 'teste realizado' // o return encerra a função e nada colocado abaixo dele vai ser executado
    console.log('ola mundo!') // isso não será executado, pois está após o return
}

console.log(testeReturn())

// colocando valores padrão nos parametros

function multiplicacao(x = 1, y = 1){ // definimos o valor padrão de 1 para x e y
    const resultado = x * y // multiplicando
    return resultado
}

const variavelMultiplicada = multiplicacao() // se chamarmos essa função e não passarmos nenhum valor para ela então os parametros vão ser aqueles valores padrões que definimos na criação da função
console.log(variavelMultiplicada)

const variavelMultiplicada2 = multiplicacao(2, 2) // Mudando os valores padrões
console.log(variavelMultiplicada2)

// Funções anônimas

const raizQuadrada = function(numero){ // nesse caso não precisamos dar nome a função
    // Códigos que serão executados quando chamarmos as funções
    const sqrt = Math.sqrt(numero)
    return sqrt
}

console.log(raizQuadrada(144)) // chamando função com parametro no console

// Arrow Function

const exponenciarNumero = (numero, exponencial) => { // a arrow function é a forma mais moderna de criar funções, ela funciona basicamente como a função anonima, porém, não precisamos do nome function e devemos colocar o simbolo de flecha (=>) antes dos colchetes
    const resultado = numero ** exponencial
    return resultado
}

console.log(exponenciarNumero(12, 2)) // chamando a arrow function e passando os parametros para ela

// As arrow function vinheram para facilitar tudo, a funcao acima poderia ser feita assim
const raiz = (n, expo) => n ** expo // podemos eliminar o return e se fosse o caso de termos apenas um parâmetro, também poderiamos eliminar os parenteses
console.log(raiz(12, 2)) // chamando a função e definindo parametros


// O indicado é criarmos varias funções com apenas 1 especialidade ao inves de uma função com várias funções