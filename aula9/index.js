// Tipos de dados primitivos

// Strings
const nome = 'Nelson'; // aspas simples 
const segundoNome = "Martins"; // aspas duplas
const terceiroNome = "'Fernandes'"; // aspas simples dentro de aspas duplas
const ultimoNome = '"Neto"'; // aspas duplas dentro de aspas simples
const nomeComposto = `${nome} ${segundoNome}`; // crase (template strings)

console.log(nome);
console.log(segundoNome);
console.log(terceiroNome);
console.log(ultimoNome);
console.log(nomeComposto);

// Number
const numeroInt = 10; // numero inteiro
const numeroFloat = 5.2; // numero flutuante 

// Undefined e null (não possuem local na memória)
let indefinido; // variaveis criadas mas não iniciadas possuem o valor undefined (uma constante não pode ser undefined)
const nulo = null; // usamos ela como 'none', é usado para deixar explicito de que o valor é nulo
// undefined é colocado automaticamente pelo javascript enquanto o nulo é algo configurado pelo desenvolvedor

// Booleans/Lógico (sim ou não)
const ligado = true; 
const desligado = false; 
// usamos esses valores para definir/mudar o fluxo de uma aplicação

// Checando os tipos
console.log(typeof nome) // string
console.log(typeof numeroInt, typeof numeroFloat); // number
console.log(typeof indefinido); // undefined
console.log(typeof nulo); // Object, mas null não pode ser enquadrado em um objeto
console.log(typeof ligado); // boolean

// copiando valores
const a = 1; 
const b = a;  // o valor de b é igual o de a 
console.log(a, b)