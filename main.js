let odstavec = document.querySelector('.odstavec');
function zmenBarvu() {
    odstavec.classList.toggle('csstrida');
}


function zmenVelikost() {
    odstavec.style.fontSize = "30px";
}


let prehravac = document.querySelector('.mujprehravac');

function spustAudio() {
    prehravac.play();
}

function resetAudio() {
    prehravac.currentTime = 0;
 }

 function resetAudio1() {
    prehravac.currentTime = 0,5;
 }

 function resetAudio1() {
    prehravac.currentTime = 1;
 }
function zastavAudio() {
    prehravac.pause();
}
