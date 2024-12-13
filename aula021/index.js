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