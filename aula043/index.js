// setInterval e setTimeout

// Vamos mostrar a hora atual a cada 1 segundo, é para isso que serve o setInterval (executar a cada intervalo de tempo pré definido)

const horaAtual = () => {
    let data = new Date() // capturando data atual 

    return data.toLocaleTimeString('pt-BR', { // formatando hora
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

const tempo = setInterval(function (){ // criamos uma função anonima, ou seja, ela servirá para chamar a função horaAtual() a cada 1000 ms (1 segundo)
    console.log(horaAtual())
}, 1000) // essa execução está dentro de uma variavel 

setTimeout(function(){ // setTimeOut vai ser usado para parar a execução do setInterval
    clearInterval(tempo) // ele irá para o setInterval que está na variavel clearInterval
    console.log('fim')
}, 10000) // a cada 10000ms (10s)

setTimeout(function(){ // esse setTimeOut executa a mensagem abaixo depois de 10s
    console.log('ola, mundo!')
}, 10000)