// While e Do While (quando não sabemos quando um loop deve terminar - necessário variavel de controle)

// While
let i = 0 // O While precisa de uma variável de controle que é declarada fora dela

while(i <= 10){ // enquanto a i for menor ou igual a 10 (true)
    console.log(i) // exiba ela
    i++ // precisamos atualizar essa variável se não teremos um loop infinido, o loop vai parar quando a i for igual a 10 o loop cessará
}

console.log('\n')

i = 0 // zerando a variavel de controle
let meuNome = 'Nelson' // string

while(i < meuNome.length){ // enquanto i for menor que a quantidade de letras do meu nome
    console.log(meuNome[i]) // ele exibira a letra de acordo com o indice em que o i vai estar
    i++ // incrementando para garantirmos que o loop uma hora ira acabar
}

// Exemplo real 

console.log('\n')

const random = (min, max) => { // Função que randomiza números, o usuário escolher o valor minimo e o máximo
    const randomizando = Math.random() * (max - min) + min
    return Math.round(randomizando)
}

const min = 1 // definindo os valares min
const max = 50 // ... e max

let numeroAleatorio // usaremos ela para passar os valores e também como variável de controle

while (numeroAleatorio !== 10){ // enquanto o numero aleatorio for diferente de 10 ele irá continuar rodando o loop
    numeroAleatorio = random(min, max) // passando novamente 
    numeroAleatorio < 10 ? console.log('0'+numeroAleatorio) : console.log(numeroAleatorio) // exibindo com zero a esquerda os numeros menores que 10
}

// Do While (mesmo exemplo)

console.log('\n')

let numeroAleatorio2 // outra variavel que vamos utilizar para randomizar e como controle também

do { // 'Faça': exiba o numero aleatorio 
    numeroAleatorio2 = random(min, max) 
    numeroAleatorio2 < 10 ? console.log('0'+numeroAleatorio2) : console.log(numeroAleatorio2) // exibindo
    // esse bloco de código muda o valor de numeroAleatorio2 antes mesmo e verificar a condição abaixo, ele executa pelomenos 1x SEMPRE, porque ele sempre executa o código e depois ele checa a condição e essa é a diferença entre ele e while normal

} while (numeroAleatorio2 !== 10) // enquanto ele for menor do que 10

// Acima, os exemplos possuiam resultado incerto, não era possivel fazer quando o numero aleátorio seria igual a 10, então fizemos um loop com while e com do while que só ira cessar quando o numero aleátorio for igual a 10