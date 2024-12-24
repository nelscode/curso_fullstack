// Objeto Date - Trabalhando com datas

const date = new Date() // A função Date é uma função construtora, por isso usamos a palavra 'new' antes do nome dela. Funções construtoras possuem a primeira letra do seu nome maiúscula
console.log(date) // sempre que executamos a função Date(), mesmo sem paramêtros, ele captura a data atual e o horário
console.log(date.toString()) // convertendo para string para que seja mais fácil de ler

const dateZero = new Date(0) // O marco zero do sistema de caléndario do sistema operacional UNIX
console.log(dateZero.toString()) // Ele vai mostrar 31/12/1969 as 21h por conta do nosso fuso horário (3 horas a menos), porém, ele deveria mostrar 01/01/1970 a meia noite

const adicionarTresHoras = 60 * 60 * 3 * 1000 // 60s * 60s é igual a 1h que * 3 é igual a 3, que * 1000 vai dar 3000ms
const dateZeroCorrigida = new Date(0 + adicionarTresHoras) // Adicionando as nossas 3 horas de fuso horário a hora zero
console.log(dateZeroCorrigida.toString()) // Agora sim temos o marco zero do sistema de caléndario do sistema operacional UNIX

// somando um dia ao marco zero
const umDia = 60 * 60 * 24 * 1000
const somandoUmDia = new Date(0 + adicionarTresHoras + umDia) // indo de 1969 a 1970 e depois somando com mais um dia
console.log(somandoUmDia.toString()) //  2 de Janeiro de 1970

// Dia Atual
const diaDeHoje = new Date() // Capturando data atual e a hora exata
console.log(diaDeHoje.toString()) // exibindo em formato string

// Criando uma data
let dataDeNascimento = new Date(2001, 2, 19, 17, 0, 0) // Criamos 19/03/2001 as 17:00
console.log(dataDeNascimento.toString()) // exibindo em formato de string

dataDeNascimento = new Date(2001, 2, 19, 17, 0, 0, 999) // Os milessimos de segundo em JS vão até 999, se colocarmos 1000, ele corrige os segundos 
console.log(dataDeNascimento.toString()) // exibindo em formato de string

dataDeNascimento = new Date(2001, 2, 19, 17, 0, 0, 1000) // Mostrando a correção
console.log(dataDeNascimento.toString()) // exibindo em formato de string

dataDeNascimento = new Date(2001, 2, 19, 17, 0, 60) // Os segundos são da mesma forma, se colocarmos 60 ele corrige os minutos, vai ficar 17:01
console.log(dataDeNascimento.toString()) // exibindo em formato de string

dataDeNascimento = new Date(2001, 2, 19, 17, 60) // Os minutos também, 60min corrige a hora para 18:00
console.log(dataDeNascimento.toString()) // Correção

// Se nos omitirmos os segundos ele zera os segundos, o mesmo vale com os minutos e as horas 
dataDeNascimento = new Date(2001, 2, 19) // Omitindo horas, segundos e minutos
console.log(dataDeNascimento.toString()) // exibindo está data as 00:00

// Um valor é visto com milissegundos
dataDeNascimento = new Date(2001) // se passarmos só o ano ele vai entender este valor como milissegundos
console.log(dataDeNascimento.toString()) // então temos 31dec de 1969 mais 2001ms

// Temos que passar pelo menos 2 valores para ter uma data desejada
dataDeNascimento = new Date(2001, 2) // Mês 3, ano 2001
console.log(dataDeNascimento.toString())  // 01 de Março de 2001

// Contagem de meses começa em 0, ou seja, Janeiro não é mês 01 e sim o mês 0, sendo assim, Dezembro que é o mês 11 e por isso que Março é 2 e não 3
dataDeNascimento = new Date(2001, 2, 19) // 19 de Março de 2001 / 19/03/2001
console.log(dataDeNascimento.toString()) // Exibindo 19 de Março de 2001 a 00:00

// Outros formatos (string)
dataDeNascimento = new Date('2001-03-19 17:30:10.12') // Ano, mes, dia (espaço), hora:minuto:segundo (obs: quando passamos string os meses não começam com 0)
console.log(dataDeNascimento.toString())

// Obtendo dia 
console.log(`Dia: ${dataDeNascimento.getDate()}`) // Usamos .getDate() para obter o dia
console.log(`Mês: ${dataDeNascimento.getMonth() + 1}`) // Usamos .getMonth() para obter o mês (0bs: lembre-se que a contagem dos meses começa com 0)
console.log(`Ano: ${dataDeNascimento.getFullYear()}`) // Usamos .getFullYear() para obter o ano
console.log(`${dataDeNascimento.getHours()}:${dataDeNascimento.getMinutes()}:${dataDeNascimento.getSeconds()}:${dataDeNascimento.getMilliseconds()}`) // capturando toda uma hora: .getHours:.getMinutes:.getSecondds:.getMilliseconds
console.log(`Número do dia na semana: ${dataDeNascimento.getDay()}`) // .getDay() obtém o número do dia na semana (em dias da semana, 0 é domingo e vai até 6 (sabado), ou seja, ele obteve 1 - segunda)

// Capturando a data contando todos os ms desde o marco zero até hoje 
const dataEmMs = Date.now() // Captura tudo em ms
console.log(dataEmMs) // podemos encontrar em bancos de dadas datas guardadas em ms
const diaDeHojeEmMs = new Date(dataEmMs) // Criando data usando em ms
console.log(diaDeHojeEmMs.toString()) // podemos ver a data atual

// função que coloca um zero da esquerda
const zeroAEsquerda = (numero) => {
    return numero >= 10 ? numero : `0${numero}`
}

// Função que formata datas 

const formatarData = (data) => {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const horas = zeroAEsquerda(data.getHours())
    const minutos = zeroAEsquerda(data.getMinutes())
    const segundos = zeroAEsquerda(data.getSeconds())

    return `${dia} / ${mes} / ${ano}  ${horas}:${minutos}:${segundos}`
}

const dataDeNascimentoNelson = new Date()
const minhaData = formatarData(dataDeNascimentoNelson)
console.log(minhaData)