// Curto Circuito (Short Circuit)

/*
    && (and) - É necessário que tudo seja true para que o resultado seja true 
    || (or) - É necessário que tudo seja false para que o resultado seja false
*/

// A avaliação mais performatica é verificar rapidamente se existe algum valor false em expressões com 'and', se algum valor false ele já para a verificação, pois não é mais necessário checar, a mesma coisa com o 'or', se algum true for encontrado ele já retorna 'true' e encerra a verificação 

console.log('Nelson' && true && 'Maria') // Nelson é um valor true, true é true, e Maria também, como todos os valores são true então ele checou todos e portando vai retornar o último 

console.log('Nelson' && false && 'Maria') // Aqui ele vai retornar false, ele checou o primeiro valor que é true e no segundo ele já encontrou o false, encerrando assim a verificação

// false é avaliado literalmente como false, mas existem valores que são avaliados como 'falsy' (também é false, mas não literal, somente quando necessário)

/* Valores falsy:

    false
    0
    '', "", `` (string vazia)
    null
    undefined
    NaN

    Estes valores são 'false' (falsy), qualquer coisa diferente disso é true (truthy)
*/

// Utilizando avaliação de curto-circuto de forma útil 

const saudacao = () => { return console.log('Olá, Mundo!') } // Função simples
const execucao = false // aqui temos uma variavel com valor false 

execucao && saudacao() // Aqui estamos basicamente verificando se os dois valores são true (com and, os dois precisam ser true para que a função seja executada), a função é, mas a variável não, logo ele já vai verificar isso primeiro e já vai finalizar a verificação sem executar a função

execucao || saudacao() // Aqui os dois precisam ser falsos para nada ser executado, logo ele vai chegar também a função, quando ver que ela é true, vai executa-la