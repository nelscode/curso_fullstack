// exercicio B C A

let a = 'A';  // b
let b = 'B';  // c
let c = 'C';  // a

let aTemp = a; // 'aTemp' guarda o valor de 'a' antes de modificarmos o valor de 'a'

a = b;
b = c;
c = aTemp;

console.log(a, b, c); // B C A

// Outra forma (mais atual)

let a2 = 'A';
let b2 = 'B';
let c2 = 'C'; 

// Mudamos apenas as ordens dos valores sem perder os valores
[a2, b2, c2] = [b2, c2, a2];

console.log(a2, b2, c2); // B C A