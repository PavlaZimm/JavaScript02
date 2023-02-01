let odstavec = document.querySelector('.odstavec');
function zmenBarvu() {
    odstavec.classList.toggle('csstrida');
}


function zmenVelikost() {
    odstavec.classList.toggle('csstrida2');
}


let prehravac = document.querySelector('.mujprehravac');

function spustAudio() {
    prehravac.play();
}

function reset() {
    prehravac.currentTime = 0;
 }

function zastavAudio() {
    prehravac.pause();
}