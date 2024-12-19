// If, Else if e Else

const idade = 100 // variavel exemplo

if (idade < 18){ // 'se' a idade for menor que 18 (se essa condição for verdadeira)
    // Será executado tudo dentro desse bloco de código (se a condição for verdadeira)
    console.log('Não pode entrar!')
}

// Condições aninhadas (várias condições)
    // Se a primeira não for 'true' então checaremos outra condição:
if (idade >= 18){ 
    console.log('Adulto')

  // 'senão se', ou seja, se a primeira condição for false, faça outro se 'se não a primeira, se'  
} else if (idade < 18 && idade >= 15){ // Se a primeira condição for 'false' ele verifica está
    // não podemos usar um else if sem anteriormente possuir um if
    console.log('Adolescente')

} else if (idade < 15 && idade >= 13){ 
    console.log('Pré-Adolescente')

} else if (idade < 13 && idade >= 5){ // Tudo acima foram outras verificações, podemos ter vários 'else if'
    console.log('Criança')

} else { // 'se não' for nenhuma das condições anteriores, ele executa está
    console.log('Bebê')
} // so podemos ter um else na chegagem

// Recapitulando 

// Checagem simples 
const valor = true; 

if(valor === true){ // se essa condição for true
    // isso é executado
    console.log(valor)
} else { // se não
    // isso é executado
    console.log(valor)
}

// Condições aninhadas (duas condições verdadeiras)
const idade2 = 18 

if (1 === 1){ // isso é true
    console.log('literal')

    // Somente está condição será exibida por que a verificação vai até a primeira condição ser verdadeira, se ele encontrar uma condição verdadeira ele finaliza todas as checagens

} else if(idade === 18){ // isso é true
    console.log('jovem adulto')
} 

// Execução não aninhadas
    // As condições aninhadas acima dependem uma da outra, assim

// As duas condições abaixo são idependentes
if (1 === 1){ // vai ser executado
    console.log('literal')
}

if (idade2 === 18){ // vai ser executado
    console.log('Jovem adulto')
}