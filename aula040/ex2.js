// Função que verifica se uma imagem está no modo paisagem ou não
    // Uma imagem está no modo paisagem quando a sua largura é menor do que a sua altura

const ePaisagem = (largura, altura) => largura > altura
console.log(ePaisagem(1000, 1000))