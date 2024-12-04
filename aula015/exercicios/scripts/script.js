// capturas
const elementoNumero = document.querySelector('#numero')
const principal = document.querySelector('#principal')

// entrada
const entradaNumero = prompt('Digite um número: ')  
const entradaNumeroConvertido = Number(entradaNumero) // conversão

// saídas
if(isNaN(entradaNumeroConvertido) || entradaNumero != entradaNumeroConvertido){
    alert('Digite apenas números')
} else {
    elementoNumero.innerHTML = `O número digitado foi ${entradaNumeroConvertido} <br/>`
    principal.innerHTML = `A raiz quadrada de ${entradaNumeroConvertido} é ${Math.sqrt(entradaNumeroConvertido)}  <br/>`
    principal.innerHTML += `${entradaNumeroConvertido} é inteiro? R-${Number.isInteger(entradaNumeroConvertido)}  <br/>`
    principal.innerHTML += `${entradaNumeroConvertido}  é NaN? R-${isNaN(entradaNumeroConvertido)}  <br/>`
    principal.innerHTML += `Arredondado para baixo: ${Math.floor(entradaNumeroConvertido)}  <br/>`
    principal.innerHTML += `Arredondado para cima: ${Math.ceil(entradaNumeroConvertido)}  <br/>` 
    principal.innerHTML += `Adicionando duas casas decimais: ${entradaNumeroConvertido.toFixed(2)}  <br/>` 
}


