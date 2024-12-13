// Operadores Lógicos 

/*
    && (and) - 'e'
    || (or) - 'ou'
    ! (not) - 'nao' (negação)
*/

// && 

const idade = 18
const carteiraDeMotorista = true

console.log(idade >= 18 && carteiraDeMotorista === true) // estou verificando se os dois valores compartilham do mesmo resultado (que é true)
console.log(idade < 18 && carteiraDeMotorista === false) // estou verificando se os dois compartilham do mesmo resultado (que é false)

/*
 Possíveis resultados para &&

 true + true = true
 false + false = false
 true + false = false 
 false + true = false
*/

// || 

const idade2 = 18
const carteiraDeMotorista2 = true

console.log(idade2 >= 18 || carteiraDeMotorista === true) // Aqui basta uma das afirmações ser true para que o resultado ser true
console.log(idade2 < 18 || carteiraDeMotorista === false) // duas afirmações false, resultado false

/* 
Possiveis resultados para ||

true + false = true
false + true = true
true + true = true
false + false = false
*/

// ! 

const idade3 = 18
const carteiraDeMotorista3 = true

console.log(!idade3 >= 18) // o operador de negação inverte o valor (aqui idade é maior ou igual a 18, então true, mas utilizando o ! ele transforma o valor e false)
console.log(!idade3 < 18) // aqui o resultado seria false, por que idade3 é maior ou igual a 18, porém o operador ! inverte o valor, logo o resultado é true

/* Possíveis resultados para ! = true ou false */

// Mais exemplos 

// com o operador && (and / e) todas as expressões precisam ser verdadeiras para retornar true
console.log(true && true) // true
console.log(true && false) // false 
console.log(false && true) // false 
console.log(false && false) // false

// com o operador || (or / ou) apenas uma expressão precisa ser verdadeira para retornar true
console.log(true || true) // true 
console.log(true || false) // true 
console.log(false || true) // true 
console.log(false || false) // false

// com o operador ! (not / nao / negacao) invertemos uma expressão 
console.log(!true) // false 
console.log(!false) // true

// podemos negar varias vezes, e ai ele inverte o valor varias vezes (inverte e depois retorna pro original)
console.log(!!true) // true
console.log(!!false) // false