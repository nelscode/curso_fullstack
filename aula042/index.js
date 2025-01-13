// Try, Catch e Finally

try {
    // executa quando não há erros
    console.log('Executando tarefa 1') // exemplo de tarefa sendo executada
    // se por acaso alguma tarefa desse bloco desse erro, iriamos para o bloco catch tratar o erro
    // criando erro:
    console.log(a)

} catch(error){
    // executa quando há erros
    console.log('tratando erro')
    // aqui dentro precisamos tratar erros e não finalizar arquivos por exemplo

} finally {
    // executa sempre!
    console.log('executo mesmo com erros!')
}

console.log('\n')

const retornaHora = (data) => {
    if((data && !(data instanceof Date))){ // se for passada uma data e ela não for uma instância de date
        throw new TypeError("Esperando instância de Date") // criando um tipo de erro
    }

    if(!data){ // se não for passado data 
        data = new Date() // ele passa a data atual para o valor do parametro
    }

    return data.toLocaleTimeString('pt-BR', { // retornando a data 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit', // adicionando 2 digitos para horas, minutos e segundos
        hour12: false // deixando o formato de 12h false para que ele atenda o formato de 24 horas
    })
}

try { // aqui ele vai tentar:
    const hora = retornaHora(1) // passar uma instância diferente de date
    console.log(hora)  // tentar exibir
} catch(error){ // se acima der erro, vamos tratar:
    const data = new Date('03-19-2001 17:30:00') // criar uma data na instância correta
    const hora = retornaHora(data) // passando uma instância correta para a função
    console.log(hora) // exibir
} finally { // executando isso sempre
    console.log('Deus te abençoe')
}