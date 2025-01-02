/*
Exercicio: Pegar o background do body e adicionar como background de cada paragrafo
*/

const body = document.body // capturando elemento body

const divParagrafos = document.querySelectorAll('.paragrafos p') // selecionando todos os paragrafos dentro da lista, o que vai ser capturado é uma 'nodelist' (que é uma coleção de elementos) que é diferente de uma array mas tem caracteristicas muito parecidas

const styleBody = getComputedStyle(body) // Usamos o getComputedStyle() para pegar o estilo de um elemento, que no caso é o body

const backgroundColorBody = styleBody.backgroundColor // De todos os estilos computados, vamos pegar o backgroundColor (rgb(82, 101, 140))

for (let paragrafos of divParagrafos){
    paragrafos.style.backgroundColor = backgroundColorBody // adicionando a cor de fundo do body nos paragrafos 
    paragrafos.style.color = 'white' // adicionando a cor branca nas letras
    // Obs: as propriedades CSS em JavaScript estão escritas com camelCase
}