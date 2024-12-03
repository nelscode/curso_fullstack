// Strings

let stringEscapada = "Olá \"Mundo\"" // Se um dia precisarmos usar aspas duplas dentro de aspas duplas basta colocarmos \ antes de cada aspa dupla para evitar que o código resulte em erro (o mesmo serve para aspas simples)
console.log(stringEscapada)

let barrasInvertidas = '\\' // Se quiseremos exibir apenas uma barra invertida nos precisamos na verdade de duas, porque uma funciona como 'tab'
let barrasComoTab = 'oi \  \ nelson' // cada barra invertida vai funcionar como um tab 
console.log(barrasInvertidas) 
console.log(barrasComoTab)

// Cada item em uma string possui um indíce, começando de 0

let meuNome = 'Nelson' // string
console.log(meuNome[0]) // pegando o primeiro elemento do indice da string, começando de 0, 'N' 
console.log(meuNome[-1]) // se buscarmos um valor que não existe no indice o resultado será undefined
console.log(meuNome.charAt(0)) // Com o .charAt() funciona da mesma forma, mas ele não vai retornar undefined caso o indice não exista, ele apenas não retornará nada

// Formas de concatenar
console.log('Olá, ' + meuNome) // operador de adição
console.log('Olá, '.concat(meuNome)) // função concat
console.log(`Olá, ${meuNome}`) // Template strings, a melhor forma!

// Encontrando o indice das letras e das palavras 

let umTexto = 'Jesus Cristo é o Senhor!'
console.log(umTexto.indexOf('Cristo')) // Aqui nos estamos procurando o indice em que se começa a palavra 'Cristo'
console.log(umTexto.indexOf('J')) // Procurando o indice da letra 'J', ele sempre vai pegar o indice da primeira letra 'J' que ele encontrar
console.log(umTexto.indexOf('CRISTO')) // o texto está totalmente maiusculo, o que significa que está diferente do que existe dentro da string, quando isso acontece ele retorna -1 (o mesmo ocorre para qualquer diferença da string procurada para a string original)

let outroTexto = 'O Jesus Jesus Jesus'
let primeiroJ = outroTexto.indexOf('J') // ele vai retornar o indice do primeiro J
let segundoJ = outroTexto.indexOf('J', primeiroJ+1) // assim vamos procurar o J depois do indice do primeiro J, colocamos +1 para que ele some o indice e não selecione o mesmo valor do primeiroJ
console.log(primeiroJ, segundoJ) // 2 8. Fazemos isso quando desejamos encontrar um indice a partir de uma posição, ou seja, o primeiro indice começa em 2, então colocamos primeiroJ+1 para que ele comece a procurar outro 'J' a partir da posição 3

// lastIndexOf() - Procurando indice a partir do final

console.log(outroTexto.lastIndexOf('J')) // Mostrando o ultimo J da string (14)
let penultimoJ = outroTexto.lastIndexOf('J') // capturando o ultimo J 
console.log(outroTexto.lastIndexOf('J', penultimoJ-1)) // Pegando o penultimo J (8)
console.log(outroTexto.lastIndexOf('J', segundoJ-1)) // pegando o primeiro J de trás para frente

// Substituindo palavras com .replace()

let apelidoAmada = 'Dudinha'
let novoApelido = apelidoAmada.replace('Dudinha', 'Gatinha') // Aqui estamos trocando uma palavra por outra
console.log(novoApelido) // exibindo

let nomeNamorada = 'maria'
console.log(nomeNamorada.replace('m', 'M')) // Mudando apenas uma letra da string

// Substituindo com expressões regulares 

let string = 'O rato roeu a roupa do rei de roma'
let stringCebolinha = string.replace(/r/g, 'l') // aqui estamos usando uma expressão regular para substituir todas as letras 'r' pela letra 'l', por isso se utiliza a flag 'g' apos as barras invertidas
console.log(stringCebolinha)

// Descobrindo o tamanho da string com o atributo .lenght

console.log(string.length) // esse atributo retorna o tamanho da string 
// (ele conta os espaços, e contando o 0 como 1)

// Fatiando string com .slice()

console.log(string.slice(2)) // Pegando todas as strings a partir da posição 2
console.log(string.slice(-4)) // exibindo os 5 ultimos caracteres de trás para frente
// isso é o mesmo que pegar o tamanho da string inteira e subtrair por 4: console.log(string.lenght - 4)
console.log(string.slice(2, 6)) // pegando string da posição 2 até a 6

// Divindindo uma string em uma array

let stringArray = string.split(' ') // o js vai ler a string e quando encontrar um espaço ele vai dividi-la 
console.log(stringArray) // cada palavra se tornou um elemento dentro de uma array
stringArray = string.split(' ', 2) // podemos limitar, ou seja, dividir apenas 2 ou mais vezes
console.log(stringArray) // array com apenas 2 resultados

// Colocanso string em maiuscula e minuscula 

console.log(string.toUpperCase()) // deixa todas as letras da string maiusculas
console.log(string.toLowerCase()) // deixa todas as letras da string minusculas