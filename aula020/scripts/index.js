// Capturandos os elementos necessários
const nomeInput = document.querySelector('#nome')
const sobrenomeInput = document.querySelector('#sobrenome')
const pesoInput = document.querySelector('#peso')
const alturaInput = document.querySelector('#altura')
const botaoEnviar = document.querySelector('#botaoEnviar')
const inscritos = document.querySelector('#inscritos')

// Função que cria um objeto
const construirObjeto = (nome, sobrenome, peso, altura) => { return { nome, sobrenome, peso, altura } }

// Lista que vai guardar os objetos criados
const cadastrados = []

// Sempre que o botão for clicado
botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault()

    const nomeInputValue = nomeInput.value
    const sobrenomeInputValue = sobrenomeInput.value
    const pesoInputValue = pesoInput.value
    const alturaInputValue = alturaInput.value // vou capturar os dados digitados no input

    // Vou criar um objeto
    const objetosCriados = construirObjeto(nomeInputValue, sobrenomeInputValue, pesoInputValue, alturaInputValue)
    cadastrados.push(objetosCriados) // e adicionar na array

    const usuariosCadastrados = document.createElement('p') // criar um elemento paragrafo
    usuariosCadastrados.className = 'usuarios' // colocar uma classe nele
    usuariosCadastrados.innerHTML = `${objetosCriados.nome} ${objetosCriados.sobrenome} possui ${objetosCriados.peso}Kg e tem ${objetosCriados.altura} de altura` // adicionar conteúdo a ele
    inscritos.appendChild(usuariosCadastrados) // colocar esse elemento dentro do elemento 'inscritos'

    console.log(cadastrados) // exibindo array completa no console
})