// Capturando container
const container = document.querySelector('.container')

// Criando elemento novo
const divNova = document.createElement('div')
divNova.className = 'divNova'

// Array de objetos
const elementosHtml = [
    {tag: 'p', texto: '<p>Isso é um paragráfo</p>'},
    {tag: 'div', texto: '<div>Isso é uma div</div>'},
    {tag: 'main', texto: '<main>Isso é o conteúdo principal</main>'},
    {tag: 'section', texto: '<section>Isso é uma seção</section>'},
    {tag: 'footer', texto: '<footer>Isso é um rodapé</footer>'}
]

// Tamanho do array de objetos
const numeroDeElementos = elementosHtml.length

// O for que começa em 0 e vai incrementando até estar igual ao tamanho da array
for(i = 0; i < numeroDeElementos; i++){
    const {tag, texto} = elementosHtml[i] // capturando a tag e o texto via desestruturação
    const elementoCriado = document.createElement(tag) // recebe o elemento do objeto para criado

    elementoCriado.textContent = texto // adicionando o texto da propriedade texto ao elemento criado
    elementoCriado.className = 'vermelhoOneBit' // classe para estilização o elemento
    
    divNova.appendChild(elementoCriado) // Adicionando elemento ao container
}

container.appendChild(divNova) // adicionando div ao container