// Operador ternário ? : 

const idade = 18 

// Checando condições com if e else
if(idade >= 18){
    console.log('Você pode entrar')
} else {
    console.log('Você não pode entrar!')
}

// Checando com o operador ternário (encurtando código)
// se for true exiba o que está após a ?, se for false, exiba o que vem após os :
const verificando = idade >= 18 ? 'Você pode entrar!' : 'Você não pode entrar!'
// (condição) ? valor verdadeiro : valor falso
console.log(verificando)

// Operador ternário com || (or)
const idade2 = null // se o valor aqui folse truthy ele seria colocado na variavel abaixo
const idadeVerificacao = idade2 || '23' // aqui estamos verificando qual valor é true, o que for true é colocado dentro da varíavel 
console.log(idadeVerificacao)