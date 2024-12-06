// Arrays (básico) - Listas/coleção de valores

const listaDeNomes = ['Nelson', 'Maria', 'Levi', 'Amélie'] // Lista com várias strings (devemos tentar ao máximo colocar só um tipo de dado na lista, isso é uma boa prática)
console.log(listaDeNomes)

// Acessando os itens da array

console.log(listaDeNomes[0]) 
console.log(listaDeNomes[1]) // Os arrays também são indexados, começando de 0 também

// Editando valores da array

listaDeNomes[3] = 'Anélie' // Editando o valor da posição 3 da array
console.log(listaDeNomes[3])

// Adicionando um novo item na array

listaDeNomes[4] = 'Amélie' // Alterando ao mesmo tempo que adicionamos um indice novo 
console.log(listaDeNomes[4])

// Descobrindo o tamanho da Array e adicionando itens

console.log(listaDeNomes.length) // retorna o tamanho da array que são a quantidade de itens dentro dela
listaDeNomes[listaDeNomes.length] = 'Davi' // ele começa contando a partir de 1 e não de 0, por esse motivo, na contagem dele um novo indice sempre é adicionado, então podemos adicionar itens na array assim também
console.log(listaDeNomes, listaDeNomes.length) // nova lista e novo tamanho

// Adicionando itens a uma array com .push()

listaDeNomes.push('Celine') // .push() adiciona um item ao final da array
console.log(listaDeNomes, listaDeNomes.length) // nova lista com novo indice

// Adicionando itens no inicio da array com .unshift()

listaDeNomes.unshift('Nilberto', 'Renata', 'Carlos', 'Marli') // todos esses itens vão ser adicionados no início e vão mudar os indices dos atuais itens
console.log(listaDeNomes, listaDeNomes.length)

// Removendo elementos do final da array 

const removidoDoFinal = listaDeNomes.pop() // retiramos o último elemento da array e colocamos esse item removido dentro da variavel
console.log(listaDeNomes, listaDeNomes.length)
console.log(removidoDoFinal) // item removido

listaDeNomes.push(removidoDoFinal) // adicionando ele novamente
console.log(listaDeNomes, listaDeNomes.length)

// Removendo item do início do array 

const removidoDoInicio = listaDeNomes.shift() // retiramos o primeiro item do array e colocamos esse item removido dentro de uma variavel e isso altera os indices de cada item
console.log(listaDeNomes, listaDeNomes.length)
console.log(removidoDoInicio) // item removido 

listaDeNomes.unshift(removidoDoInicio) // adicionando ele novamente
console.log(listaDeNomes, listaDeNomes.length)

// Apagando elementos da lista sem mudar os indices

// delete listaDeNomes[0] // estamos apagando todos os itens nessas posições da lista, porém, estes indices não vão deixar de existir, eles apenas vão ficar vazios
console.log(listaDeNomes[1]) // exibindo uma das posições apagadas, elas se tornou 'undefined', posição sem valor definido
console.log(listaDeNomes, listaDeNomes.length) 

// Itens inexistentes = undefined

console.log(listaDeNomes[50]) // esse indice não existe, por isso ele retorna undefined

// Fatiando arrays com .slice()

console.log(listaDeNomes.slice(0, 2)) // exibindo itens da posição 0 a 2
// nos sempre temos que adicionar 1 ao número que desejamos acessar para que ele não seja cortado
console.log(listaDeNomes.slice(0, -5)) // exibindo de 0 até a ultima posição -5

// tipo de dado array 

console.log(typeof listaDeNomes) // O tipo de dado de uma array é object
console.log(listaDeNomes instanceof Array) // verificando se a array é de fato uma array
 