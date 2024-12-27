// Atribuição por desestruturação (Objetos)

const eu = { // Objeto normal
    nome: 'Nelson',
    sobrenome: 'Martins', 
    idade: 23, 
    peso: 56,
    endereco: { // Objeto dentro do objeto
        rua: 'Rua 1234',
        numero: 1234
    }
}

const primeiroNome = eu.nome // atribuição normal
console.log(primeiroNome)

// Atribuição por desestruturação

const {nome} = eu // Como o nome da variavel é o mesmo nome da propriedade do objeto, isso aqui já é o suficiente (extrair d o objeto essa propriedade)
const {sobrenome, idade} = eu // conseguimos pegar quantas propriedades desejarmos
console.log(nome, sobrenome, idade)

// Valores vazios (impedindo o undefined)

const {ultimoNome = 'não existe'} = eu // essa propriedade não existe, ela retornaria undefined, mas colocamos o valor 'não existe' como padrão para impedir isso
console.log(ultimoNome)

const {peso = 60} = eu // Porém, mesmo colocando um valor padrão, se existir essa propriedade e valor, ele assume o valor que está na propriedade
console.log(peso)

// Utilizando outros nomes para variavel

const {nome: meuPrimeiroNome} = eu // não estamos mais usando como variavel o mesmo nome da propriedade, essa é a sintaxe para esses momentos
const {ultimoNome: meuUltimoNome = 'não existe'} = eu // colocando valores para propriedades inexistentes
console.log(meuPrimeiroNome, meuUltimoNome)

// Atribuindo um objeto que está dentro de outro objeto 

const {endereco: {rua, numero}} = eu // criando variaveis com o mesmo nome da propriedade
const {endereco: {rua: minhaRua, numero: numeroDaCasa}} = eu // criando com nomes de varíavel diferentes dos nomes das propriedades
const {endereco: enderecoCompleto} = eu
console.log(rua, numero, minhaRua, numeroDaCasa)

// Valores padrões

const {endereco: {rua: nomeDaMinhaRua = 'Zélia 123'}} = eu // se a propriedade ou valor não existir, ele será Zélia 123
console.log(nomeDaMinhaRua)

// Operador ... (rest)

const {nome: nome2, ...resto} = eu // aqui colocamos o primeiro valor da primeira propriedade em 'nome2' e o resto colocamos dentro da variavel com o operador rest
console.log(resto)