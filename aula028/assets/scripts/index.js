// função que descobre o nome do dia
const descobrirNomeDoDia = (numeroDoDia) => {
    let nomeDoDia

    switch(numeroDoDia){
        case 0:
            nomeDoDia = 'Domingo'
            return nomeDoDia
        case 1:
            nomeDoDia = 'Segunda-Feira'
            return nomeDoDia
        case 2:
            nomeDoDia = 'Terça-Feira'
            return nomeDoDia
        case 3:
            nomeDoDia = 'Quarta-Feira'
            return nomeDoDia
        case 4:
            nomeDoDia = 'Quinta-feira'
            return nomeDoDia
        case 5:
            nomeDoDia = 'Sexta-Feira'
            return nomeDoDia
        case 6:
            nomeDoDia = 'Sábado'
            return nomeDoDia
        default:
            nomeDoDia = ''
            return  "Só existem sete dias na semana!"
    }
}

// Função que captura horas e minutos e formata
const horarioDoDia = (dataCompleta) => {
    const horas = dataCompleta.getHours()
    const minutos = dataCompleta.getMinutes()

    if (horas >= 10 && minutos >= 10){
        return `${horas}:${minutos}`
    } else if(horas < 10 && minutos >= 10){
         return `0${horas}:${minutos}`
    } else if(horas >= 10 && minutos < 10) {
         return `${horas}:0${minutos}`
    } else {
        return `0${horas}:0${minutos}`
    }
}

// Função que formata dia, mes e ano
const formatarDiaMesAno = (dataCompleta) => {
    const dataDia = dataCompleta.getDate()
    const mes = dataCompleta.getMonth()
    const ano = dataCompleta.getFullYear()

    let nomeMes

    switch(mes){
            case 0:
                nomeMes = 'Janeiro'
                break  
            case 1:
                nomeMes = 'Fevereiro'
                break  
            case 2:
                nomeMes = 'Março'
                break  
            case 3:
                nomeMes = 'Abril'
                break  
            case 4:
                nomeMes = 'Maio'
                break  
            case 5:
                nomeMes = 'Junho'
                break  
            case 6:
                nomeMes = 'Julho'
                break  
            case 7:
                nomeMes = 'Agosto'
                break  
            case 8:
                nomeMes = 'Setembro'
                break  
            case 9:
                nomeMes = 'Outubro'
                break  
            case 10:
                nomeMes = 'Novembro'
                break  
            case 11:
                nomeMes = 'Dezembro'
                break  
            default:
                nomeMes = ''

    }

    return `${dataDia} de ${nomeMes} de ${ano}`
}

// Capturando data e o numero do dia
const dataDeHoje = new Date() 
const numeroDoDiaDaSemana = dataDeHoje.getDay()

// Chamando funções formatadoras
const nomeDoDiaDaSemana = descobrirNomeDoDia(numeroDoDiaDaSemana)
const dataFormatada = formatarDiaMesAno(dataDeHoje)
const horaDoDia = horarioDoDia(dataDeHoje)

// Função que junta tudo
const formatarDataEHora = (dia, data, hora) => {
    return `<span class="vermelhoOneBit">Data:</span> ${dia}, ${data} <br> <span class="vermelhoOneBit">Horário:</span> ${hora}`
}

// Exibindo na tela para o usuário
const title = document.querySelector('.title')
title.innerHTML = formatarDataEHora(nomeDoDiaDaSemana, dataFormatada, horaDoDia)