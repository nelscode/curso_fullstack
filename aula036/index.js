// for of

// string
const meuNome = 'Nelson Martins' // uma string tem indices portanto ela é interavel

// iterando com for classico
for (let i = 0; i < meuNome.length; i++){
    console.log(meuNome[i]) // cada letra do nome vai ser exibida
}

console.log('\n')

// iterando com for in
for (let i in meuNome){
    console.log(meuNome[i]) // fazendo o mesmo com for in
}

console.log('\n')

// iterando com for of 
for (let valor of meuNome){ // quando utilizamos o 'of' vamos direto ao valor e não ao indice
    console.log(valor) // ele já iterou diretamente toda a letra do nome
}

console.log('\n')

// arrays
const familia = ['Nelson', 'Maria', 'Levi', 'Amélie']
for (let itemArray of familia){
    console.log(itemArray) // iterando cada item da array de forma direta
} // obs: em alguns casos vai ser necessário o indice e as vezes não

console.log('\n')

// for each

familia.forEach((elementos) => { // o forEach já está disponivel dentro do array, para utiliza-los acessamos ele por um .
    console.log(elementos) // o forEach recebe uma função e funções por sua vez podem receber parametros, nesse caso, utilizamos o paramaetro elementos para percorrer a array e iterar cada um dos itens dela
    // Apenas um parametro significa que ele vai pegar apenas o valor
})

console.log('\n')

familia.forEach((valor, indice) => {  // dois parametros nos estaremos iterando o valor e o indice de cada valor
    console.log(valor, indice)
})

console.log('\n')

familia.forEach((valor, indice, array) => { // com 3 parametros iteramos primeiro o valor de cada posição, o indice de cada posição e o array completo
    console.log(valor, indice, array)

}) 

// Iteraveis

// for (clássico) - é iteravel com array e strings
// for in - iteravel com string, arrays e objetos por retornar o indice ou a chave
// for of - iteravel com strings e arrays por retornar o valor em si (não é iteravel com objetos)