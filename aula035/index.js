// for in

// Array (vetor)
const familia = ['Nelson', 'Maria', 'Levi', 'Amélie'] // 0, 1, 2, 3 - Essa array tem 4 posições começando do 0

for (let indice in familia){ // precisamos apenas declarar uma váriavel seguida do 'in' e o nome da array para percorrer essa array
    console.log(indice) // a váriavel indice está percorrendo a array e mostrando o indice de cada item começando de 0
    console.log(familia[indice]) // aqui nos estamos mostrando cada item da array
} // em sua essência, o for in ler os indices ou chaves de um objeto

console.log('\n')

// Objeto
const pessoa = {
    nome: 'Nelson',
    sobrenome: 'Martins', 
    idade: 23, 
    peso: 56,
    altura: 1.74 // chaves/propriedades do objeto
}

for (let chaves in pessoa){
    console.log(chaves) // aqui ele está iterando as chaves/propriedades do objeto pessoa
    console.log(pessoa[chaves]) // aqui ele está iterando o valor de cada chave/propriedade
}

// extra: outra forma de acessar uma propriedade

console.log(pessoa.nome) // forma tradicional
console.log(pessoa['nome']) // abrir as chaves e colocar o nome da propriedade em aspas, é útil para

const chaveNome = 'nome' // as vezes não sabemos qual propriedade vamos usar
console.log(pessoa[chaveNome]) // podemos usar essa forma para pegar as propriedades de forma dinamica

// sabendo disso... 

for (let chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`) // tudo mais facilitado - nome da chave e valor da chave
}
