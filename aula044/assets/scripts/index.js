const timer = document.querySelector('.section-timer h2')
const btnIniciar = document.querySelector('.iniciar')
const btnPausar = document.querySelector('.pausar')
const btnResetar = document.querySelector('.resetar')

let intervalo;
let segundos = 55;
let minutos = 59;
let horas = 23;

const iniciarRelogio = () => {  
    intervalo = setInterval(function(){
        segundos++;
 
        if(segundos === 60){
         minutos++;
         segundos = 0;
        }
 
        if(minutos === 60){
         horas++;
         minutos = 0;
        }
 
        if(horas > 23){
         horas = 0;
         minutos = 0;
         segundos = 0;
         clearInterval(intervalo)
        }
 
        timer.innerHTML = formatarHora(horas, minutos, segundos);
 
     }, 1000)
}

btnIniciar.addEventListener('click', () => {
    clearInterval(intervalo);
    timer.style.color = 'black';
    iniciarRelogio();
});

btnPausar.addEventListener('click', () => {
    timer.style.color = 'red';
    clearInterval(intervalo)
});

btnResetar.addEventListener('click', () => {
    timer.style.color = 'black';
    clearInterval(intervalo)
    horas = 0
    minutos = 0
    segundos = 0
    timer.innerHTML = formatarHora(horas, minutos, segundos);
});

const formatarHora = (horas, minutos, segundos) => {
    return (
        (horas < 10 ? '0' + horas : horas) + ':' +
        (minutos < 10 ? '0' + minutos : minutos) + ':' +
        (segundos < 10 ? '0' + segundos : segundos)
    )
} 