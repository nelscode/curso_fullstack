// Função Fizz e Buzz

/*
Checar se o número é um número, se não for, imprimir o próprio número
Para números divisíveis por 3: imprime "Fizz".
Para números divisíveis por 5: imprime "Buzz".
Para números divisíveis por ambos (3 e 5): imprime "FizzBuzz".
Para outros números, imprime o próprio número.
Executar com os números de 0 a 100
*/

// Função
const fizzBuzz = (numero) => {
    if(!isNaN(numero)){  
        if(numero % 3 === 0 && numero % 5 === 0){
            return 'FizzBuzz'
        } else if (numero % 3 === 0){
            return 'Fizz'
        } else if (numero % 5 === 0){
            return 'Buzz'
        } else {
            return numero
        }
    } else {
        return numero
    }
}

// Testando passando uma string 
console.log(fizzBuzz('a'))

// Usando a função de 0 a 100
for(i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}