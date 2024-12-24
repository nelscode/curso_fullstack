// Switch Case 

const data = new Date('2001-03-19 17:30:00') // capturando data e horas atuais
const diaDaSemana = data.getDay() // capturando dia da semana 

switch (diaDaSemana){ // Criando um switch, colocamos dentro de parenteses a variável que desejamos checar
    case 0: // se o valor for 0
        console.log('Domingo') // dia: Domingo
        break // sempre precisamos colocar o break para interromper o código, isso não é feito automaticamente, se não tirarmos ele continua executando
    case 1:
        console.log('Segunda-Feira')
        break
    case 2: 
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6: 
        console.log('Sábado') // Faremos isso até o sábado
        break
    default: // Caso seja menor que 0 ou maior que 6, ele vai exibir:
        console.log('Só existem 7 dias na semana!')
        // O default é a última condição e por isso não precisa do break
}

// Função que captura o dia da semana

const getDayWeek = (dayWeek) => {
    let dayWeekText 

    switch(dayWeek){
        case 0:
            dayWeekText = 'Domingo'
            return dayWeekText // Sempre que uma função encontra a palavra return ele finaliza a função, nesse caso a palavra return funciona como break
        case 1:
            dayWeekText = 'Segunda-Feira'
            return dayWeekText
        case 2:
            dayWeekText = 'Terça-Feira'
            return dayWeekText
        case 3:
            dayWeekText = 'Quarta-Feira'
            return dayWeekText
        case 4:
            dayWeekText = 'Quinta-Feira'
            return dayWeekText
        case 5:
            dayWeekText = 'Sexta-Feira'
            return dayWeekText
        case 6:
            dayWeekText = 'Sábado'
            return dayWeekText
        default:
            dayWeekText = ''
            console.log('Só existem sete dias na semana')
    }
}

const dataDeNascimento = new Date('2001-03-19 17:30:00') // passando data de nascimento
const diaDeNascimento = dataDeNascimento.getDay(dataDeNascimento) // caputurando dia dessa data
const capturandoNomeDoDia = getDayWeek(diaDaSemana) // Passando o numero do dia 
console.log(capturandoNomeDoDia) // recebendo o retorno que é o nome do dia da semana
