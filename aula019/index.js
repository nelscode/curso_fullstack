// Valores primitivos e valores por refêrencia 

/* Primitivos (valores imutáveis) - São valores que são copiados
    - string
    - number
    - boolean
    - undefined
    - null
    - bigint 
    - symbol
*/

// Uma string é imútavel (o valor dela é imutavel e não o valor da váriavel)
let nome = 'Nelson'
nome = 'nelson' // podemos mudar o valor que está dentro da variável 
nome[0] = 'L' // mas não podemos mudar a string em si, isso não funciona
console.log(nome[0]) // continua exibindo 'n'

// Copiando valores com dados primitivos (quando o dado for primitivo)
let a = 'A'
let b = a // isso aqui é uma cópia do valor, apenas. Porém, b é independente de a
console.log(a, b)

a = 'Mudando valor de A' // aqui mudamos o valor de 'a'
console.log(a, b) // mas o valor de 'b' não mudou, pois, ele é indenpendente de 'a'

/* Valores por refêrencia (mútaveis) - São valores que são passados por refêrencia
    - arrays
    - object
    - functions
*/

// Uma array é mutável
const array = [1, 2, 3]
array[0] = array[2] // podemos mudar o conteúdo dentro dela
console.log(array[0])

// Nós não criamos cópias, apenas referenciamos 
const a2 = [1, 2, 3]
const b2 = a2 // referenciamos o mesmo valor de 'a2' para 'b2' (a e b apontam para o mesmo valor na memoria)
console.log(a2, b2)

a2.push(4, 5, 6) // adicionamos valores a 'a2'
console.log(b2) // e o b2 também seguiu os mesmos valores, mostrando que ele tem depêndencia de 'a2' (as duas variaveis apontam para o mesmo valor na memoria), seus valores são iguais

b2.pop()
b2.pop()
console.log(a2) // o mesmo ocorre com a2 se modificarmos o b2, pois, eles apontam para o mesmo local na memoria

// Copiando um valor referencial 

let familia = ['Nelson', 'Maria', 'Levi', 'Amélie']
let familia2 = [...familia] // agora copiamos o valor de familia e a variavel familia2 é independente de familia1

familia.push('Anélie') // mudança
console.log(familia2) // Podemos ver claramente que familia2 não foi afetado pela mudança, pois, ele se tornou idependente

// B C A 

let A = 'A' // b
let B = 'B' // c
let C = 'C' // a

console.log([A, B, C] = [B, C, A]) // passamos os valores em uma array para podermos utiliza-los como referencia

// Fazendo o mesmo com objetos 

const pessoa = { // criando objeto
    nome: 'Nelson', 
    sobrenome: 'Martins'
}

const pessoaReferenciada = pessoa // referenciado o objeto
console.log(pessoaReferenciada) // exibindo variavel que recebeu valor referenciado

pessoa.nome = 'Maria'
pessoa.sobrenome = 'Eduarda' // Modificando os valores
console.log(pessoaReferenciada) // Pessoa refêrenciada também sofreu mudanças, pois, aponta para o mesmo local da memória

const pessoaReferenciada2 = {...pessoa} // copiando um valor referenciavel

pessoa.sobrenome = 'Jacinto' // outra mudança 
console.log(pessoaReferenciada2) // não sofre mudanças, pois, seu valor é idependente agora
console.log(pessoaReferenciada) // sofre mudanças