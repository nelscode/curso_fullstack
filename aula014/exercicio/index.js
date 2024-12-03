const main = document.querySelector('main')
console.log(main)

const nome = prompt('Digite seu nome completo: ')

const nomeSplit = nome.split(' ')

main.innerHTML = `O meu nome é <strong>'${nome}'</strong> <br />`
main.innerHTML += `Ele possui <strong>${nome.length} letras <br />`
main.innerHTML += `A segunda letra do meu nome é <strong>'${nome[1]}'</strong> <br />`
main.innerHTML += `A primeira letra do meu nome é <strong>'${nome[0]}'</strong> <br />`
main.innerHTML += `A última letra do meu nome é <strong>'${nome[nome.length - 1]}'</strong> <br />`
main.innerHTML += `As três ultimas letras do meu nome são <strong>'${nome.slice(-3)}'</strong> <br />`
main.innerHTML += `As palavras do meu nome são <strong>'${nomeSplit}'</strong><br />`
main.innerHTML += `Meu nome com letras maiúsculas <strong>'${nome.toUpperCase()}'</strong> <br />`
main.innerHTML += `Meu nome com letras minúsculas <strong>'${nome.toLowerCase()}'</strong> <br />`