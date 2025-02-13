// Factory functions (funções fabrica)

function criarPesosa(nome, sobrenome, idade, peso, altura){ // isso é uma função fabrica
    return { // um objeto é retornado por ela
        nome, 
        sobrenome, 
        idade,
        // Quando possuimos funções dentro de objetos essas funções são chamadas de métodos
        falarOi(saudacao){
            return `${nome} te disse ${saudacao}. Ele está com ${this.peso}Kg e ${this.altura} de altura`;
        },
        // Metodo que calcula o IMC
        imc(){
            const meuImc = this.peso / (this.altura) ** 2;
            return Math.round(meuImc); 
        },
        peso,
        altura, 
        // Geter
        get falarNome() { // quando utilizamos a palavra get fazemos a função se comportar como um simples atributo
            return `${nome}`
        },
        get nomeCompleto(){ // esse método basico junta o nome e o sobrenome
            return `${this.nome} ${this.sobrenome}`
        },
        // setter - Setando valores automaticamente
        set meuNome(valor){
            valor = valor.split(' '); // criando string e adicionando valores, split divide uma string nos espaços
            this.nome = valor.shift(); // setando o primeiro elemento da array como valor de nome;
            this.sobrenome = valor.join(' '); // setando o resto da array como valor de sobrenome;
        }
    };
}

const primeiraPessoa = criarPesosa('Nelson', 'Martins', 23, 60, 1.74); // aqui passamos os argumentos para cada chave do objeto
console.log(primeiraPessoa)

console.log(primeiraPessoa.falarOi("'Olá'")); // primeiraPessoa é o 'this', quando estivermos com um objeto selecionando algum método, o this é o objeto

console.log(primeiraPessoa.imc()); // exibindo o imc

console.log(primeiraPessoa.falarNome); // se tentarmos usar como função dará errado, mas assim dará certo porque graças a palavra get o método funciona como atributo

primeiraPessoa.nomeCompleto = 'Maria Eduarda Jacinto Silva'; // isso vai ser o valor passado para o parametro

console.log(primeiraPessoa.nomeCompleto); // exibindo 

primeiraPessoa.meuNome = 'Nelson Martins Fernandes'; 

console.log(primeiraPessoa.nome, primeiraPessoa.sobrenome); 

// Apos criar a função construtora podemos criar diversos objetos rapidamente!