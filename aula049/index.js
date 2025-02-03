// Escopo lexico

const meuNome = 'Nelson'; 

function exibirNome(){ // sabemos que uma função procura os elementos ate mesmo no escopo global
    console.log(meuNome);
}
exibirNome(); // irá acessar a constante de escopo global e exibir (a variável ver os seus vizinhos)

// Função que usa outra função

function usarExibirNome(){ // essa função procura a variável dentro da função e se não encontrar vai até o escopo global para encontrar a variavel
    exibirNome(); 
}
usarExibirNome(); // a função sempre vai lembrar o local onde ela foi declarada/escrita

function usarExibirNome2(){
    const meuNome = 'Nelson Martins'; // declarando variável dentro do escopo da função
    console.log(exibirNome()); // porém, ela não vai exibir a variável dentro do escopo e sim a variável do escopo global porque foi assim que estava quando essa função foi criada
}
usarExibirNome();