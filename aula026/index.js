// Objeto Date - Trabalhando com datas

const date = new Date() // A função Date é uma função construtora, por isso usamos a palavra 'new' antes do nome dela. Funções construtoras possuem a primeira letra do seu nome maiúscula
console.log(date) // sempre que executamos a função Date(), mesmo sem paramêtros, ele captura a data atual e o horário
console.log(date.toString()) // convertendo para string para que seja mais fácil de ler

const dateZero = new Date(0) // O marco zero do sistema de caléndario do sistema operacional UNIX
console.log(dateZero.toString()) // Ele vai mostrar 31/12/1969 as 21h por conta do nosso fuso horário (3 horas a menos), porém, ele deveria mostrar 01/01/1970 a meia noite

const adicionarTresHoras = 60 * 60 * 3 * 1000 // 60s * 60s é igual a 1h que * 3 é igual a 3, que * 1000 vai dar 3000ms
const dateZeroCorrigida = new Date(0 + adicionarTresHoras) // Adicionando as nossas 3 horas de fuso horário a hora zero
console.log(dateZeroCorrigida.toString()) // Agora sim temos o marco zero do sistema de caléndario do sistema operacional UNIX

// Dia Atual
const diaDeHoje = new Date() // Capturando data atual