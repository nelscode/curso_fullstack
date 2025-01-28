const inputNovaTarefa = document.querySelector(".input-nova-tarefa"); 
const btnAddTarefa = document.querySelector(".btn-add-tarefa"); 
const tarefas = document.querySelector(".tarefas");
const grupo = document.querySelector(".grupo-entrada");

const criarLi = () => {
    const li = document.createElement('li');
    return li;
}

const criarBotaoApagar = (li) => {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'btnApagar');
    botaoApagar.setAttribute('title', 'Apagar essa tarefa');
    botaoApagar.innerHTML = 'X'; 
    li.appendChild(botaoApagar);
}

const limparInput = () => {
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus(); 
}

const criarTarefa = (valorInput) => {
    const li = criarLi();
    li.innerHTML = valorInput; 
    tarefas.appendChild(li);
    limparInput();
    criarBotaoApagar(li); 
    salvarTarefas();
}

btnAddTarefa.addEventListener('click', () => {
    if(!inputNovaTarefa.value) return; 
    criarTarefa(inputNovaTarefa.value);
})

inputNovaTarefa.addEventListener('keypress', (e) => {
   if(e.keyCode === 13){
    grupo.style.marginBottom = '1rem';
    criarTarefa(inputNovaTarefa.value);
   }
   
})

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('btnApagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

const salvarTarefas = () => {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText; 
        tarefaTexto = tarefaTexto.replace('X', '').trim(); 
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); 
    localStorage.setItem('tarefas', tarefasJSON);
}

const adicionaTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}

adicionaTarefasSalvas();