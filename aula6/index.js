// Constantes são espaços na memória que seus valores não podem ser alterados

const meuNome = 'Nelson Martins';  // tudo dentro de aspas é numero (quando é texto)
// use camelCase com constantes
// nomes de constantes não podem começar com numeros, não podem conter espaços ou traços
// nomes de constantes também são case sensitive

const nomeDaNamorada = 'Maria Eduarda'; 
// constantes não podem ser criadas e depois iniciadas (porque seus valores não podem ser redeclarados), elas precisam ser criadas e iniciadas no mesmo momento

const idadeNamorada = '21'; // se esta em aspas é uma string

// exibindo constantes
console.log(meuNome, ' namora com ', nomeDaNamorada);

// podemos atribuir o valor de uma variavel a uma constante e vice versa.
let numeroDaIdade = 23; // para ser considerado um número ele precisa estar fora de aspas (será um numero se ele for de fato um número)
const minhaIdade = numeroDaIdade;
console.log(minhaIdade);

console.log(typeof meuNome); // verificando o tipo dos dados
console.log(typeof minhaIdade);
console.log(typeof idadeNamorada); // string