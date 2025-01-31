// return (retorna um valor e finaliza a função)
const soma = (a, b) => {
    return a + b; // essa função retorna o valor de a + b
}
const somando = soma(2, 2);
console.log(somando);

// função que não retorna nada
const soma2 = (a, b) => {
    console.log(a + b); // essa função não tem a palavra return, porém, o console.log() não funciona da mesma forma, ele apenas exibe um resultado.
    // essa função não retorna nada.
}
console.log(soma2(2, 2)); 

// Função util que não retorna nada
/* 
    const body = document.querySelector('body').addEventListener('click', () => {
        body.style.backgroundColor = 'red'; // essa função anonima não retorna nada, mas muda a cor do fundo da página
    })
*/

// função que retorna um objeto 
const criarPessoa = (nome, sobrenome, idade) => {
    return{
        nome, sobrenome, idade
    }; // essa função retorna as chaves de um objeto
}
const nelson = criarPessoa('Nelson', 'Martins', 23); // passando os argumentos
console.log(nelson);

// Função que retorna outra função 
const falarFrase = (comecoDaFrase) => {
    // essa função deve receber como argumento o começo da frase que desejamos falar
    const falarResto = (restoDaFrase) => {
        return `${comecoDaFrase} ${restoDaFrase}` // a função resto da frase recebe o resto da frase e retorna a string completa
    }
    return falarResto; // a função falar frase vai retornar a função falarResto
}

const falar = falarFrase('Olá'); // Essa função vai retornar falarResto
console.log(falar); // mostrando função retornada (a variavel se torna a função interna)
const resto = falar('Mundo!'); // a variavel falar basicamente se tornou a função falar resto
console.log(resto); // agora retornamos a string do falarResto

// Forma útil de utilizar

const multiplicadorDeNumeros = (multiplicador) => {
    // essa função recebe um multiplicador e 
    return function(numero){ // retorna uma função
        return numero * multiplicador // que retorna um numero * multiplicador
    }
}
const duplicarNumero = multiplicadorDeNumeros(2); // agora duplicarNumero se tornou uma função
console.log(duplicarNumero(2)); // e recebeu numero, agora ela vai multiplicar 2 * 2;