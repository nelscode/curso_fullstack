// funções de callback - Funções que são passadas como argumento para outra função

function f1(){
    console.log('f1'); // essa função só executa 'f1' no console
}

function f2(){
    console.log('f2');
}

function f3(){
    console.log('f3');
}

f1();
f2();
f3(); // todas vão seguir suas ordens normalmente (mas nem sempre vai ser assim)
console.log('Olá, mundo!'); // esse comando vai ser executado por ultimo sempre

// Mas nem sempre vai ser assim... Podemos precisar executar as funções antes do console.log

console.log()

function rand(min = 1000, max = 3000){
    const numero = Math.random() * (min - max) + min;
    return Math.round(numero);
}

function x1(){
    setTimeout(function(){
        console.log('x1'); 
    }, rand()); // essa função vai ser executada entre 1 e 3 segundos
}

function x2(){
    setTimeout(function(){
        console.log('x2'); 
    }, rand()); // essa função vai ser executada entre 1 e 3 segundos
}

function x3(){
    setTimeout(function(){
        console.log('x3'); 
    }, rand()); // essa função vai ser executada entre 1 e 3 segundos   
}

x1();
x2();
x3(); 
console.log('Olá, mundo!'); // Porém, independente dos segundos, essa linha vai ser executada primeiro.


// Vamos mudar isso, chamando uma função dentro da outra (callback)

console.log()

function y1(callback){ // essa função vai receber o callback como parametro
   setTimeout(() => {
    console.log('y1');
    if(callback) callback(); // se existir um callback então se executa o callback()
   }, rand());
}

function y2(callback){
    setTimeout(() => {
     console.log('y2');
     if(callback) callback();
    }, rand());
 }

function y3(callback){
    setTimeout(() => {
     console.log('y3');
     if(callback) callback();
    }, rand());
}

y3(function(){ // passando função de callback
    y2(function(){ // a y2 se tornou callback da y1, o mesmo para y3
        y3(function(){ // callback
            console.log('Olá, mundo!'); // por fim o console.log() será exibido, somente depois das 3 funções
        })
    })
}) // isso é chamado de callback hell

// Evitando o callback hell

function a1(callback){ // essa função vai receber o callback como parametro
    setTimeout(() => {
     console.log('a1');
     if(callback) callback(); // se existir um callback então se executa o callback()
    }, rand());
 }
 
 function a2(callback){
     setTimeout(() => {
      console.log('a2');
      if(callback) callback();
     }, rand());
  }
 
 function a3(callback){
     setTimeout(() => {
      console.log('a3');
      if(callback) callback();
     }, rand());
}

// vai funcionar da mesma forma, porém, sem a necessidade ficar passando a função anonima

a1(a1callback); // passando função a1callback para a1

function a1callback(){ // criando função a1callback 
    a2(a2callback); // passando a a2 de callback
}

function a2callback(){
    a3(a3callback); // passando a3 de callback
}

function a3callback(){
    console.log('ola, mundo'); // passando para a3 callback
}

// as promises resolvem isso