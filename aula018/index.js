// Objetos - Coleção de propriedades

// Objeto 'eu'
const eu = {
    nomeCompleto: 'eu Martins Fernandes Neto', // nomeCompleto é uma das propriedades do objeto 'eu'
    idade: '23' // não precisamos mais declarar váriavel para propriedade, somente dos : seguidos de virgula
}

console.log(eu.nomeCompleto) // Acessando apenas o atributo do objeto 'eu'
console.log(eu) // exibindo o objeto completo

eu.nomeCompleto = 'Nelson Martins Fernandes Neto' // Acessando o nome da pessoa e modificando ela
console.log(eu.nomeCompleto)

// Criando uma função que cria um objeto 

const criarPessoa = (nome, sobrenome, idade) => { // Passamos na função todos os parametros que vão ser valores das propriedades que o objeto vai ter
    return { // ele vai retornar 3 argumentos
        nome: nome, // a propriedade nome vai receber o argumento do parametro nome
        sobrenome: sobrenome, // a propriedade sobrenome vai receber o argumento do parametro sobrenome
        idade: idade // a propriedade idade vai receber o argumento do parametro idade
    }
}

const nelson = criarPessoa('Nelson', 'Martins', 23) // adicionando argumento para cada parametro
// obs: Chamamos os valores enviados para os parametros de 'argumento'

console.log(nelson) // exibindo objeto inteiro ja criado
console.log(nelson.nome) // exibindo apenas o argumento nome
console.log(nelson.sobrenome) // exibindo apenas o argumento sobrenome
console.log(nelson.idade) // exibindo apenas o argumento idade

// Uma forma mais enxuta de se fazer

const criarPessoa2 = (nome, sobrenome, idade) => {return {nome, sobrenome, idade}} // assim não foi necessário fazer tantas repetições
const maria = criarPessoa2('Maria', 'Martins', 21)
console.log(maria)

// Criando métodos (funções dentro do objetos)

const pessoaFicticia = {
    nome: 'João', 
    sobrenome: 'Paulo', 
    idade: 50, // Propriedades normais de um objeto

    // Métodos
    saudacao(){
        console.log(`Olá, eu me chamao ${pessoaFicticia.nome}`)
    } // é uma pequena função dentro do objeto
}

// saudacao() deu erro, continuar aula em 14:06
