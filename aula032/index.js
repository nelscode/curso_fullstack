// loop for (classico)

// Contagem regressiva de 0 a 10
for(let i = 0; i <= 10; i++){ // Para o loop for, precisamos passar 5 estágios: criar uma váriavel de controle, criar uma condição e incrementar ou decrementar essa váriavel de controle, o loop irá parar quando a condição for false
    console.log(i) // esse loop irá parar com i <= 10 
    // ele começara em 1, e irá somar até o loop ser menor ou igual a 10
}

console.log('\n')

// Contagem regressiva de 10 a 0
for(let i = 10; i >= 0; i--){ // Aqui vamos decrementar, i começa com 10 e ele vai decrementar 1 a cada loop
    console.log(i) // enquanto i for  maior que 0, ele irá continuar o loop, quando i já não for mais maior que 0, ele parará o loop 
    // ela irá começar em 10 e irá parar quando for maior ou igual a 0
}

console.log('\n')

for(let i = 0; i <= 20; i+=2){ // somando de 2 em 2 ao i: 2, 4, 6...
    console.log(i) // ele irá começar de 0 e irá somar 2 até chegar em 20
}

console.log('\n')

for(let i = 20; i >= 0; i-=2){ // fazendo ao contrário
    console.log(i) // mostrando de 20 e diminuindo de 2 em 2, 20, 18... até chegar em 0
}

console.log('\n')

// For com condições dentro do loop

for(i = 0; i <= 10; i++){
   const verificacao = i % 2 === 0 ? `${i} é par` :  `${i} é impar` // condição que verifica quais numeros são impars e quais numeros são pares e exibe
   console.log(verificacao) 
}

// Percorrendo array

console.log('\n')

const nomes = ['Nelson', 'Maria', 'Levi', 'Amélie'] // toda array possui um indice, começando do 0
let tamanhoLista = nomes.length // pegando o tamanho do array

for(let i = 0; i < tamanhoLista; i++){ // enquanto i for menor que o tamanho da lista, ele exibe o indice da lista com i e soma +1 ao i
    console.log(`${i}. ${nomes[i]}`) // exibindo cada item da lista
}
