// Closures - A habilidade de uma função acessar o seu escopo lexico

function retornandoFuncao(){
    const meuNome = 'Nelson'; // variavel dentro do escopo da função 
    
    return function(){
       return meuNome; // essa função está retornando a variável que está no elemento pai dela mesmo
       // acesso ao escopo dela, ao escopo do elemento pai e ao escopo global
    };
}

const funcao = retornandoFuncao(); // sabemos que funcao já se tornou aquela funcao que retornandoFuncao() retorna
console.dir(funcao); // retornando funcao sem nome
// console.dir() retorna o objeto com todas as suas propriedades

// A função sempre vai fechar o proprio escopo quando ela for declarada: closure

function retornandoFuncao2(nome){
    return function(){
        return nome; // a função vai fechar o seu closure quando ela for declarada
    }
}

const meuNome = retornandoFuncao2('Nelson'); // meuNome() vai retornar 'nome' e o closure dela vai ser 'Nelson'
const meuSobrenome = retornandoFuncao2('Martins'); // o closure desta vai ser Martins

console.dir(meuNome); // 3 scopes
console.dir(meuSobrenome); // 3 scopes

console.log(meuNome(), meuSobrenome()); // sempre vão ser nelson e martins respectivamente!