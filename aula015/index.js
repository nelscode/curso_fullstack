// Números

const numeroInteiro = 1 // Número inteiro 
const numeroFlutuante = 2.5 // Número com ponto flutuante
console.log(numeroInteiro + numeroFlutuante) // o calculo será feito normalmente com qualquer operador, pois, o tipo dos dois dados é 'number'

// Convertendo para string

const numeroInteiroString = numeroInteiro.toString() // usamos o .toString() para converter um número para string
console.log(typeof numeroInteiroString) // string
console.log(numeroInteiroString + numeroFlutuante) // Agora o que vai ocorrer é uma concatenação

// Representação binária

const numeroGrande = 6000
const numeroGrandeBinario = numeroGrande.toString(2) // isso nos retorna a representação binária do número
console.log(numeroGrandeBinario) 
console.log(typeof numeroGrandeBinario) // o tipo do número binário ainda é string

// Retirando ou adicionando casas decimais

const numeroGrandeFlutuante = 2.223492949832
const numeroPequenoFlutuante = 10
console.log(numeroGrandeFlutuante.toFixed(2)) // utilizando o .toFixed para limitar o número de casas decimais após a virgula/ponto e isso não altera o valor
console.log(numeroPequenoFlutuante.toFixed(1)) // Adicionando uma casa decimal após a virgula
// Geralmente usamos o .toFixed apenas na exibição para o usuário

// Verificando se o número é 'inteiro' com Number.isInteger()

const numeroInteiroTrue = 23  
const numeroInteiroFalse = 2.5
console.log(Number.isInteger(numeroInteiroTrue)) // se o número for inteiro ele retorna true
console.log(Number.isInteger(numeroInteiroFalse)) // aqui ele retorna-ra false

// NaN - Not a Number/Não é um número

const numeroMultiplicavel = 10 
const meuNome = 'Nelson Martins'
const contaNaN = numeroMultiplicavel * meuNome // não é possivel multiplicar numeros com palavras
console.log(contaNaN) // por isso o resultado é NaN (não é um número!)
console.log(isNaN(contaNaN)) // Se o resultado for NaN ele retorna true
console.log(isNaN(numeroMultiplicavel)) // retorna false, pois numeroMultiplicavel é um número

const numeroString = '10'
console.log(numeroString * numeroMultiplicavel) // Isso funciona, mas NUNCA FAÇA CONTA COM STRINGS, SEMPRE FAÇA A CONVERSÃO, isso não é uma boa prática. 

// Imprecisão do JavaScript (Padrão IEEE 754-2008)

let primeiroNumero = 0.7
let segundoNumero = 0.1
console.log(primeiroNumero + segundoNumero) // o resultado obvio é 0.8, mas ele retorna 0.799... isso é a imprecisão do JavaScript

// A lógica seria esta:
primeiroNumero += segundoNumero // 0.8
primeiroNumero += segundoNumero // 0.9
primeiroNumero += segundoNumero // 1.0
console.log(primeiroNumero) // Porém, ele retorna 0.999...

let resolucao = Number(primeiroNumero.toFixed(2)) // parsando o numero para Number e colocando toFixed(2) nos resolvemos esse problema
console.log(resolucao) 
console.log(Number.isInteger(resolucao)) // ele passa a ser inteiro 

primeiroNumero += segundoNumero // 1.1
primeiroNumero += segundoNumero // 1.2
primeiroNumero += segundoNumero // 1.3
console.log(primeiroNumero)
console.log(Number.isInteger(primeiroNumero)) // ao passar de 1.0 ele se torna float

// resolvendo com calculos matématicos
let terceiroNumero = 0.5
let quartoNumero = 0.1  
let calculoResoluto = ((terceiroNumero * 100) + (quartoNumero * 100)) / 100 // (50 + 10) / 100  = 0.6
console.log(calculoResoluto) // assim resolvemos o problema da imprecisão com calculos matemáticos simples

// Objeto Math

let meuNumero = 1.5
console.log(Math.floor(meuNumero)) // Math.floor arredonda o numero para baixo (1)
console.log(Math.ceil(meuNumero)) // Math.ceil arredonda o numero para cima (2)
console.log(Math.round(meuNumero)) // arredonda para o número inteiro mais proximo (até 4 arredonda para baixo, e a partir de 5 arredonda para cima)