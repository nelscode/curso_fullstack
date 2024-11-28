const nome = prompt('Qual o seu nome?'); // essa função captura um dado do teclado
// tudo que vem do teclado naturalmente é uma string, se quiseremos numeros precisamos converter

alert(`Olá, ${nome}!`); // essa exibe algo na tela

const opcao = confirm("Clique em 'ok' por favor!"); // se o usuário clicar em ok o valor retornado é true, se clicar em cancelar, o valor retornado é false

// todas essas funções estão dentro do objeto window assim como o log esta dentro do objeto console, poderiamos digitar
// window.prompt()
// window.alert()
// window.confirm()

// Quando uma função ou método não traz nenhum valor, ela retorna undefined (sempre)