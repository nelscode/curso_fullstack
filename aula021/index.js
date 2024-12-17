<<<<<<< HEAD
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
=======
// Operadores de comparação (comprar dois valores)
/*
    > - Maior que
    < - Menor que
    >= - Maior ou igual 
    <= - Menor ou igual
    == - Igual (checa epenas o valor) * não recomendado * 
    != - Diferente (checa apenas o valor) * não recomendado *
    === - Igualdade estrita (checa o valor e o tipo de dado) * recomendado *
    !== - Diferente estrito (checa valor e tipo de dado) * recomendado *
*/

// Expressões de comparação vão retornar valores booleanos

// Maior e menor
console.log(10 > 5) // True (10 é maior do que 5)
console.log(5 < 3) // false (5 não é menor do que 3)

// Menor ou igual e Maior ou igual 
console.log(10 >= 11) // false, ele nem é maior e nem é igual a 11
console.log(10 <= 11) // true, ele não é igual mas é menor do que 11

console.log(10 >= 9) // true, maior do que 9
console.log(10 >= 10) // true, ele não é maior mas é igual

// Igualdade 
console.log(10 == 10) // true, 10 é igual a 10
console.log(10 == '10') // true (isso é um problema), porque 10 e '10' são de tipos diferentes

// O recomendado é:

// Igualdade estrita
console.log(10 === '10') // false, 10 e '10' são diferentes, um é um number e o outro é string, é por isso que é recomendado usar === ao invés de ==
 // obs: sempre converta tudo!

// Diferença 
console.log(5 != 5) // false, 5 é igual a 5
console.log(5 != 3) // true, 5 é diferente de 3
console.log(5 != '5') // false (isso é um problema), 5 é diferente de '5'

// O recomendado é 

// Diferença estrita
console.log(5 !== '5') // true, agora ele vai verificar o tipo também, e vai perceber que 5 e '5' são de tipos diferentes
    // obs: sempre converta tudo!

/*  
    Utilize === no lugar de ==
    Utilize !== no lugar de != 
*/
>>>>>>> c922d6087f669b8a8974dd0bbcc152df82268e08
