// Funções imediatas (IIFE) (invocadas automaticamente)
    // Fugindo do escopo global 

// essa função se auto invoca:
(function(){ // sintaxe: (nomedafuncao({}()))
    console.log('ola, mundo!'); // nada aqui dentro, inclusive a funão vai tocar o escopo global
    const nome = 'nelson'; // essa variavel não conflita com as de fora
    console.log(nome);
    // Podemos escrever tudo normalmente aqui dentro
}()); 

const nome = 'nelson'; // variavel com o mesmo nome sem conflitos

(function(idade, peso, altura){ // também podendo receber parametros
    console.log(idade, peso, altura)
}(23, 60, 1.74));