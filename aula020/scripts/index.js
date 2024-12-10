const nomeInput = document.querySelector('#nome')
const sobrenomeInput = document.querySelector('#sobrenome')
const pesoInput = document.querySelector('#peso')
const alturaInput = document.querySelector('#altura')
const botaoEnviar = document.querySelector('#botaoEnviar')

const inscritos = document.querySelector('#inscritos')

const construirObjeto = (nome, sobrenome, peso, altura) => {
    return {
        nome, sobrenome, peso, altura
    }
}

const cadastrados = []

botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault()

    const nomeInputValue = nomeInput.value
    const sobrenomeInputValue = sobrenomeInput.value
    const pesoInputValue = pesoInput.value
    const alturaInputValue = alturaInput.value

    const objetosCriados = construirObjeto(nomeInputValue, sobrenomeInputValue, pesoInputValue, alturaInputValue)
    cadastrados.push(objetosCriados)

    const usuariosCadastrados = document.createElement('p')
    usuariosCadastrados.id = 'usuarios'
    usuariosCadastrados.innerHTML = `${objetosCriados.nome} ${objetosCriados.sobrenome} possui ${objetosCriados.peso}Kg e ${objetosCriados.altura} de altura`
    inscritos.appendChild(usuariosCadastrados)
})