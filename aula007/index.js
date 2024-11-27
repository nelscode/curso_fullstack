// objeto
const nelson = { // propriedades
    nome: 'Nelson',
    sobrenome: 'Martins',
    idade: 23,
    altura: 1.74, 
    peso: 59
}; 

// calculos
const imc = nelson.peso / Math.pow(nelson.altura, 2);
const anoDeNascimento = 2024 - nelson.idade

// template strings
console.log(`${nelson.nome} ${nelson.sobrenome} tem ${nelson.idade} anos de idade, pesa ${nelson.peso.toFixed(0)}Kg, possui ${nelson.altura} de altura.`) 

console.log(`O seu IMC é de ${imc.toFixed(2).replace('.', ',')}.`);

console.log(`${nelson.nome} nasceu em ${anoDeNascimento}.`)