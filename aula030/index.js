// Atribuição via desestruração (arrays)

let a = 'a'
let b = 'b'
let c = 'c'

// Atribuição - criação da array que vamos atribuir
const letras = [b, c, a]; // essa array precisa ter o ; no final da sua criação

// Atribuição via Desestruturação
[a, b, c] = letras // para cada indice do array atribuimos um valor

// Eibindindo
console.log(a, b, c)

// Mais exemplos

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90] // contamos a partir do 0 (indice)
const primeiroNumero = numeros[0] // atribuindo primeiro indice do array a outra váriavel, e para fazer isso com outras váriaveis de forma mais rápida utilizamos a Atribuição via desestruturação
const [numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9] = numeros // cada variavel recebe um valor da array 'numeros'
console.log(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9) // exibindo

// Uma forma mais rápida

const [...todosOsValores] = numeros // atribuindo todos os valores, basta utilizar ... e ele pega todos os valores ou o resto dos valores, o operador '...' se chama 'rest' ou 'spread'
console.log(todosOsValores) // exibindo
console.log(todosOsValores.length) // mostrando tamanho dessa array
console.log(todosOsValores[todosOsValores.length - 1]) // mostrando ultimo valor da array

// Valores vazios 

const [um, , , quatro, cinco] = numeros // deixamos espaços vazios se não for nosso objetivo atribuir todo os valores
console.log(um, quatro, cinco) // exibindo apenas os valores atribuidos
// obs: se criarmos com const, todas variáveis criadas vão ser const

// Arrays dentro de arrays 

const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] // cada lista possui o seu indice que começa a partir de 0 e dentro de cada lista existe um indice que também inicia-sse em 0
console.log(numeros2[1][2]) // acessando indice dentro do indice

// fazendo o mesmo via desestruturação
const [,[, , seis]] = numeros2 // deixamos um espaço branco (que seria a primeira lista), dentro da segunda lista deixamos dois espaços em branco e acessei o numero 6
console.log(seis) // exibindo este valor

// capturando todas as listas
const [lista0, lista1, lista2] = numeros2 // atribuindo por desestruturação todos as listas
console.log(lista1[2]) // acessando lista1 da array numeros e indo até a posição 2 (0, 1, 2)