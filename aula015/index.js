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

// Arrendondando um número

let meuNumero = 1.5
console.log(Math.floor(meuNumero)) // Math.floor arredonda o numero para baixo (1)
console.log(Math.ceil(meuNumero)) // Math.ceil arredonda o numero para cima (2)
console.log(Math.round(meuNumero)) // arredonda para o número inteiro mais proximo (até 4 arredonda para baixo, e a partir de 5 arredonda para cima)

// Menor e maior número

let meusNumeros = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10] // array de números 
// utilizamos ... (três pontos) antes da array se desejarmos utilizar essas funções da biblioteca nela
console.log(Math.max(...meusNumeros)) // Quando utilizamos o max ele nos trás o maior número da array
console.log(Math.min(...meusNumeros)) // Quando utilizamos o min ele retorna o menor número da array

console.log(Math.max(10, 20, 30, 40, 50, -100)) // forma normal de uso do max
console.log(Math.min(10, 20, 30, 40, 50, -100)) // forma normal de uso do min

// Randomizando números

let numeroAleatorio = Math.random() // random() gera um número flutuante aleatório entre 0 e 1 
console.log(numeroAleatorio)
console.log(Number.isInteger(numeroAleatorio)) // o número é float

let numeroAleatorio2 = Math.round(Math.random() * 10) // gerando numero aleátorio entre 0 e 10
console.log(numeroAleatorio2)
console.log(Number.isInteger(numeroAleatorio2)) // Depois de arredondado ele se torna um inteiro

// Descobrindo o valor de PI 
 
let pi = Math.PI // usamos o .PI para conseguir o valor de PI
console.log(pi) // 3.14

// Potêncialização com Math 

let pow = Math.pow(12, 2) // é o mesmo que dizer '12 elevado ao 4'
console.log(pow)

let pow2 = 12 ** 2 // elevando 12 ao quadrado com matématica básica
console.log(pow2)

// Descobrindo a raiz quadrada de um número 

let sqrt = Math.sqrt(144) // Descobrindo a raiz quadrada de 144
console.log(sqrt)

let sqrt2 = 144 ** (1/2) // pegando raiz quadrada de um número com matématica simples
console.log(sqrt2)

// Tipo de dado infinity 

console.log(100 / 0) // Quanto mais próximo do 0 o JavaScript chega maior o número
console.log(!!(100 / 0)) // e ele avalia isso como true