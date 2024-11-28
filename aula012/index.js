// exercicio de soma

const primeiroNumero = prompt('Digite um número:')
const segundoNumero = prompt('Digite outro número:')

const primeiroNumeroConvertido = Number(primeiroNumero)
const segundoNumeroConvertido = Number(segundoNumero)

if(isNaN(primeiroNumeroConvertido) || isNaN(segundoNumeroConvertido)){
    alert('Digite apenas números!')
} else {
    const resultado = primeiroNumeroConvertido + segundoNumeroConvertido
    alert(`${primeiroNumeroConvertido} + ${segundoNumeroConvertido} = ${resultado}`)
}
