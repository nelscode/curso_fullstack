// As muitas formas de declarar funções

// Declaração de função (function hoisting())

falarOi() // O hoisting é a elevação da função ao topo do documento, ou seja, podemos chama-la antes de declarar a função.
function falarOi(){
    console.log('Oi!');
}

// First-class Objects (Objetos de primeira classe) - function expression
    // as funções também podem ser consideradas como dados:

const souUmDado = function(){
    console.log('Sou um dado!'); // a função é o resultado de uma constante, elas podem ser dados
}
souUmDado(); // a constante está sendo executada como uma função

// arrow functions (function expression mais curta)
 
const funcaoArrow = () => console.log('sou uma arrow function!'); // uma função normal
funcaoArrow(); // executando

// funcao dentro do objeto

const objt = {
    falarOla() { // criando função dentro do objeto
        console.log('olá');
    }
}

objt.falarOla(); // chamando função

// função anonima
let intervalo;
let contador = 0

intervalo = setInterval(function () {
    console.log('olá, mundo');
    contador++;

    if(contador === 2){
        clearInterval(intervalo);
    }
}, 2000)