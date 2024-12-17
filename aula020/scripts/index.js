// Capturando elementos
const nomeInput = document.querySelector('#nome')
const sobrenomeInput = document.querySelector('#sobrenome')
const pesoInput = document.querySelector('#peso')
const alturaInput = document.querySelector('#altura')
const botaoEnviar = document.querySelector('#botaoEnviar')
const inscritos = document.querySelector('#inscritos')

const construirObjeto = (nome, sobrenome, peso, altura) => { return { nome, sobrenome, peso, altura }} // Função que cria um objeto

const cadastrados = [] // array vazia

// todas as vezes que o botão for criado
botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault()

    const nomeInputValue = nomeInput.value
    const sobrenomeInputValue = sobrenomeInput.value
    const pesoInputValue = pesoInput.value
    const alturaInputValue = alturaInput.value // capturar o valor dos inputs

    // passar esse valor como argumento na função
    const objetosCriados = construirObjeto(nomeInputValue, sobrenomeInputValue, pesoInputValue, alturaInputValue)
    cadastrados.push(objetosCriados) // adicionar esse objeto criado para a array vazia

    // Criar um elemento 'p'
    const usuariosCadastrados = document.createElement('p')
    usuariosCadastrados.className = 'usuarios' // dar uma classe para ele
    usuariosCadastrados.innerHTML = `${objetosCriados.nome} ${objetosCriados.sobrenome} possui ${objetosCriados.peso}Kg e ${objetosCriados.altura} de altura` // exibir cada propriedade do objeto
    inscritos.appendChild(usuariosCadastrados) // adicionar esse paragrafo a div 'inscritos'

    console.log(cadastrados) // exibir a array completa no console
})