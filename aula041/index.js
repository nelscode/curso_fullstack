// tratando e lançando erros (try, catch, throw)

// console.log(naoExisto) // exibindo variavel que não existe (ocasionando erro)

/* Mensagem de erro:
C:\Users\nelso\OneDrive\Área de Trabalho\workspace\programacao\cursos\cursojs\aula041\index.js:3
console.log(naoExisto) // exibindo variavel que não existe
            ^
ReferenceError: naoExisto is not defined
*/

// Se tivermos que executar algo que possa ser 'perigoso' (possivel erro), fazemos: 

try { // esse bloco significa 'tentar', 'tente fazer algo'
    console.log(naoExisto)
} catch(error) { // caso o bloco acima der erro, ele vai exibir o que está dentro deste bloco
    console.log('Algo deu errado, tente novamente!') // mensagem de erro
    console.log('\n')
    console.log(error) // essa variavel guarda a exata mensagem de erro apresentada no console naturalmente
    // Obs: não exiba nunca isso ao usuário isso é perigoso para o sistema
}

console.log('\n')

// Lançando os próprios erros com throw()

const soma = (a, b) => { // função que soma dois numeros
    if(isNaN(a) || isNaN(b)){ // verificando se de fato entraram numeros
        throw('A e B precisam ser números!') // caso não forem lançados numeros, ele lança o erro
    }

    return a + b
}

console.log(soma(1, 2)) // mostrando função sem erro
console.log('\n')

// tratando o proprio erro
try{
    console.log(soma(1, 'a')) // Lançando o erro com throw
} catch(error){ // capturando o erro e colocando na variavel
    console.log(error) // exibindo mensagem de erro do throw definido dentro da função (NUNCA LANCE UM ERRO ASSIM PRO USUARIO)
    console.log(soma(1, 1)) // o bloco acima tentou e deu erro, agora ele vai tentar o bloco de baixo, mostrando o resultado da soma
}