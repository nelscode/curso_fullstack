// Break e Continue (controle dos laços, funciona em todos os laços)

const numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10]; // array de numeros

// Continue (continuar para próxima iteração)

for(let numero of numeros){ // apenas iterações normais com cada item do array
    console.log(numero);
}

console.log('\n');

for(let numero of numeros){ // iterando novamente
    if(numero === 2){ // porém, dessa vez sem mostrar o numero 2
        continue; // utilizamos a palavra continue para isso
        // isso significa 'continua para proxima iteração'
    }
    console.log(numero);
}

console.log('\n');

// Break (sair do laço)

for(let numero of numeros){ // iterando todos os números da array
    if(numero === 5){ // quando o número 5 for encontrado
        console.log('achei o número 5!') // exibe essa mensagem
        break // e encerra o laço de repetição
    } 

    console.log(numero) // ele vai exibir os números até chegar o número 5
}

console.log('\n')

// Utilizando os outros 'for'

// Clássico
for(let i = 0; i < numeros.length; i++){

    if(numeros[i] === 2){
        console.log('achei o 2, continuando...')
        continue
    }

    if(numeros[i] === 7){
        console.log('achei o 7, encerrando...')
    }

    console.log(numeros[i]) // exibindo os numeros
}

console.log('\n')

// for in 
for(let i in numeros){
    
    if(numeros[i] === 2){
        console.log('achei o 2, continuando...')
        continue
    }

    if(numeros[i] === 7){
        console.log('achei o 7, encerrando...')
        break
    }

    console.log(numeros[i])
}

console.log('\n')

// While

let i = 0 // criando variavel de controle

while(i < numeros.length){ // enquanto o i for menor que o tamanho da array numeros
   let numero = numeros[i] // exibe o valor de numeros referente a posição do index

   if(numero === 2){ // se ele achar o 2
        console.log('achei o 2, continuando...') // ele vai mostrar essa mensagem
        i++ // incrementar para isso não se tornar um looping infinito
        continue // e pular esse dois
   }

   if(numero === 7){ // se ele achar o 7
    console.log('achei o 7, encerrando...') // ele apenas vai mostrar a mensagem e enncerrar
    break // encerrando
   }

   console.log(numeros[i]) // sempre que os numeros forem diferentes dos acima, ele irá exibir
   i++ // e incrementar

}

console.log('\n')

// Do While

i = 0
do {
    let numero = numeros[i]

    if(numero === 2){
        console.log('achei o 2, continuando...')
        i++
        continue
    }

    if(numero === 7){
        console.log('achei o 7, encerrando...')
        break
    }

    console.log(i)
    i++

} while(i < numeros.length)