<<<<<<< HEAD
// Capturando elementos
=======
// Capturandos os elementos necessários
>>>>>>> c922d6087f669b8a8974dd0bbcc152df82268e08
const nomeInput = document.querySelector('#nome')
const sobrenomeInput = document.querySelector('#sobrenome')
const pesoInput = document.querySelector('#peso')
const alturaInput = document.querySelector('#altura')
const botaoEnviar = document.querySelector('#botaoEnviar')
const inscritos = document.querySelector('#inscritos')

<<<<<<< HEAD
const construirObjeto = (nome, sobrenome, peso, altura) => { return { nome, sobrenome, peso, altura }} // Função que cria um objeto

const cadastrados = [] // array vazia

// todas as vezes que o botão for criado
=======
// Função que cria um objeto
const construirObjeto = (nome, sobrenome, peso, altura) => { return { nome, sobrenome, peso, altura } }

// Lista que vai guardar os objetos criados
const cadastrados = []

// Sempre que o botão for clicado
>>>>>>> c922d6087f669b8a8974dd0bbcc152df82268e08
botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault()

    const nomeInputValue = nomeInput.value
    const sobrenomeInputValue = sobrenomeInput.value
    const pesoInputValue = pesoInput.value
<<<<<<< HEAD
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
=======
    const alturaInputValue = alturaInput.value // vou capturar os dados digitados no input

    // Vou criar um objeto
    const objetosCriados = construirObjeto(nomeInputValue, sobrenomeInputValue, pesoInputValue, alturaInputValue)
    cadastrados.push(objetosCriados) // e adicionar na array

    const usuariosCadastrados = document.createElement('p') // criar um elemento paragrafo
    usuariosCadastrados.className = 'usuarios' // colocar uma classe nele
    usuariosCadastrados.innerHTML = `${objetosCriados.nome} ${objetosCriados.sobrenome} possui ${objetosCriados.peso}Kg e tem ${objetosCriados.altura} de altura` // adicionar conteúdo a ele
    inscritos.appendChild(usuariosCadastrados) // colocar esse elemento dentro do elemento 'inscritos'

    console.log(cadastrados) // exibindo array completa no console
>>>>>>> c922d6087f669b8a8974dd0bbcc152df82268e08
})