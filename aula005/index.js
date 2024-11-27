// variáveis com let
let primeiroNome = 'Nelson'; // é muito importante que coloquemos nomes significativos em cada variável
let segundoNome = 'Martins'; 
let variavelTeste;  // váriaveis declaradas sem valor possui um valor indefinido: undefined

// Podemos usar a palavra var para criar variáveis porém isso é mais antigo. NÃO UTILIZE VAR, UTILIZE LET
// nomes de variaveis não podem começar com um numero, espaços, traços, simbolos
// utilize camelCase: primeiroNome (primeiro nome com letra minuscula e a segunda maiuscula) esse é o correto
// javascript é case sensitive
// quando usamos let nao podemos REDECLARAR uma váriavel, somente modificar o seu valor

// exibindo valor das variaveis
console.log(`${primeiroNome} ${segundoNome} casou-se com Maria em 2025!`)
console.log(`Em 2027 ${primeiroNome} ${segundoNome} teve gêmeos com Maria, eles se chamam Levi e Amélie`)
console.log(variavelTeste)

variavelTeste = 'texto teste' // inicializando a variavel
// o valor não é mais undefined

// exibindo teste 
console.log(variavelTeste)