let mmSegundos = 0
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function formatarTempo(valor) {
    return valor < 10 ? "0" + valor : valor;
}

function atualizarCronometro() {
    mmSegundos+=10;

    if(mmSegundos === 1000) {
        mmSegundos = 0
        segundos++
    } if(segundos == 60) {
        segundos = 0;
        minutos++
    } if(minutos == 60) {
        minutos = 0
        horas++;
    }

    document.getElementById("cronometro").textContent =
    `${formatarTempo(horas)} : 
    ${formatarTempo(minutos)} :
    ${formatarTempo(segundos)} :
    ${formatarTempo(mmSegundos)}`;
}

function start() {
    if(!intervalo) {
        intervalo = setInterval(atualizarCronometro, 10);
    }
}

function stop() {
    clearInterval(intervalo);
    intervalo = null;
}

function reset() {
    stop();
    segundos = 0
    minutos = 0
    horas = 0
    document.getElementById("cronometro").textContent = "00:00:00.000"
}