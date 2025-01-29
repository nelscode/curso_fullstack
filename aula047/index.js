// Parâmetros da função

function funcaoGenerica(){ // função sem paramêtros.
    console.log('Oi!');
    console.log(arguments);
    console.log(arguments[1]);
}
funcaoGenerica('ola', 1, 2, 3, 4); // se passarmos parametros para funções sem parametros o JavaScript ignora tudo!
// Porém, quando usamos palavra function para criar a função temos o objeto 'arguments' que guarda todos os argumentos que enviamos a função

// Utilizando o arguments de uma forma útil

function somandoArgumentos(){
    let total = 0;
    for(let argumento of arguments){ // loop que soma tudo que está em 'arguments'
        total+=argumento;
    }

    console.log(total);
}

somandoArgumentos(2, 3, 4, 5, 6, 7,7,8); // a função irá somar todos os argumentos passados para ela.
somandoArgumentos('ola', 234, 456, 'oi', true); // se tiver strings e booleans ele só irá concatenar

// undefined 

function funcao(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}

funcao(1, 2, 3); // o que não foi passado vai ser undefined

// valores padrões

function valoresPadrao(a, b = 0, c = 0){ // se não for passado nenhum parametro para b, ele vai assumir o valor 0 (padrão)
    console.log(a + b + c);
}

valoresPadrao(2); // mão passamos valor para b, então ele assumiu que é 0
valoresPadrao(2, 2); // agora passamos valores para b
valoresPadrao(2, undefined, 2); // colocando undefined nos conseguimos 'pular' um argumento fazendo ele assumir o seu valor padrão (null não funciona). O IDEAL SERIA MUDAR TODA A LÓGICA e NÃO FAZER ISSO

// Atribuição via desestruturação
                // desejamos receber um objeto com essas chaves:
function funcao2({nome, idade, altura}){
    console.log(nome, idade, altura);
}

funcao2({nome: 'Nelson', idade: 23, altura: 1.74}); // passando um objeto literal
const obj = { nome: 'Nelson', idade: 23, altura: 1.74}; // Criando objeto 
funcao2(obj); // passando objeto

// Desestruturação via array

function funcao3([nome, sobrenome, idade]){
    console.log(nome, sobrenome, idade);
}

funcao3(['Nelson', 'Martins', 23]); // funciona da mesma forma

// Rest Operator (...)

function conta(operador, acumulador, ...numeros){ // todos os argumentos passados depois do operador e do acumulador vão ser argumentos do parametro 'numeros' (ele deve ser sempre o ultimo parametro da função)
   for(let numero of numeros){
    if(operador === '+') acumulador+=numero; // a depender do operador que passarmos o loop irá somar todos os numeros ao acumulador por conta do rest operator
    if(operador === '-') acumulador-=numero;
    if(operador === '*') acumulador*=numero;
    if(operador === '/') acumulador/=numero;
   }

   console.log(acumulador);
}

conta('+', 0, 20, 23, 26, 50); // passando os argumentos desejados

// function expression (mesma função)

const conta2 = function (operador, acumulador, ...numeros){ // todos os argumentos passados depois do operador e do acumulador vão ser argumentos do parametro 'numeros' (ele deve ser sempre o ultimo parametro da função)
    for(let numero of numeros){
     if(operador === '+') acumulador+=numero; // a depender do operador que passarmos o loop irá somar todos os numeros ao acumulador por conta do rest operator
     if(operador === '-') acumulador-=numero;
     if(operador === '*') acumulador*=numero;
     if(operador === '/') acumulador/=numero;
    }
 
    console.log(acumulador);
    console.log(arguments); // utilizando a palavra function temos a variável arguments
 }
 
conta2('+', 0, 20, 23, 26, 50); // passando os argumentos desejados

// Arrow Function (mesma função)

const conta3 = (operador, acumulador, ...numeros) => { // todos os argumentos passados depois do operador e do acumulador vão ser argumentos do parametro 'numeros' (ele deve ser sempre o ultimo parametro da função)
    for(let numero of numeros){
     if(operador === '+') acumulador+=numero; // a depender do operador que passarmos o loop irá somar todos os numeros ao acumulador por conta do rest operator
     if(operador === '-') acumulador-=numero;
     if(operador === '*') acumulador*=numero;
     if(operador === '/') acumulador/=numero;
    }
 
    console.log(acumulador);
 }
 
conta3('+', 0, 20, 23, 26, 50); // passando os argumentos desejados

// Substitua a variavel arguments pelo rest operator e simplifique tudo

function conta4(...args){ 
    console.log(args);
}
 
conta4('+', 0, 20, 23, 26, 50); // passando os argumentos desejados