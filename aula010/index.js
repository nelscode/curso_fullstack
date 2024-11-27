// operadores aritmeticos, atribuição e incremento

// Atribuição
const atribuir = '=' // o sinal de = é o sinal que utilizamos para atribuir um valor a uma variavel em javascript

// aritmeticos 

// O operador + faz adição com números e concatenação com strings
const adicao = 1 + 1; 
const concatencacao = '1' + '1'; // strings, pois estão entre aspas por isso o resultado é 11, por que ele concatena
console.log(adicao) // 2
console.log(concatencacao) // 11 por que é uma string

// Subtração -
const subtracao = 10 - 5
console.log(subtracao) // 5

// Divisão /
const divisao = 12 / 2
console.log(divisao) // 6

// multiplicacao * 
const multiplicacao = 10 * 2
console.log(multiplicacao) // 20

// Exponênciação ** (elevar os numeros) 
const expo = 12 ** 2 // é 12 elevado ao quadrado 
console.log(expo) // 144

// Resto da divisão
const resto = 10 % 3 // quando a divisão da um numero quebrado (float), sempre tem um resto, esse operador pega isso
const restoInteiro = 10 % 2 // quando o resultado é inteiro, o resto é 0
console.log(resto) // 1
console.log(restoInteiro) // 2 

// Parenteses (preferencia)
/* Ordem de precedencia de operadores: parenteses, expoentes, multiplicação e divisão (mesmo nivel), adição e subtração */
const expressao = (1 + 1) ** 10 * 2 / 2 - 13
// na expressão acima primeiro é calculado o que está dentro dos parenteses, depois o expoente, ai vem a multiplicação e divisão e depois a subtração
console.log(expressao)

// Incremento e Decremento 

// incremento 
let contador = 0; 
contador++ // o operador ++ vai sempre somar 1 ao valor, incrementando de 1 em 1 
// é o mesmo que colocar contador = contador + 1
console.log(contador) // 0 + 1 = 1

let contador3 = 0
console.log(++contador3) // assim, primeiro incrementamos e depois exibimos (pre-decremento)
// so usamos isso se quisermos incrementar direto na exibição do valor que desejamos incrementar (mas não é recomendado)

// Decremento 
let contador2 = 1
contador-- // o operadro -- vai sempre subtrair -1 ao valor, decremento de 1 em 1
// é o mesmo que colocar contador = contador - 1
console.log(contador) // 1 - 1 = 0

let contador4 = 1
console.log(--contador4) // assim nos primeiros decrementamos e depois exibimos (pre-decremento)
// so usamos isso se quisermos decrementar direto na exibição do valor que desejamos decrementar (mas não é recomendado)

// Não podemos utilizar operadores de incremento e decremento com constantes

// Operador junto com atribuição (juntamos o = com um operador)
const passo = 2 // um valor para atribuirmos
let contador5 = 10 // uma variavel
contador5 += passo // atribuindo e somando ao mesmo tempo
// é mesmo que se digitar contador5 = contador5 + passo
console.log(contador5)

// isso pode ser feito com qualquer operador aritmetico 
console.log(contador*=passo)
console.log(contador/=passo)
console.log(contador-=passo)
console.log(contador**=passo)
console.log(contador%=passo)

// NaN, isso não funciona com tipos de dados que não sejam um number
const nome = 'Nelson'
console.log(contador*=nome) // resultado é NaN (not a number)
// sempre que os NaN aparecerem é porque os tipos de dados são incongruentes

// Conversão 27:41