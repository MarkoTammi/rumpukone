

function playSound(event) {
    let nappain = event.keyCode;
    let audioSelector = 'audio[data-key="' + nappain + '"] ';
    let audio = document.querySelector(audioSelector);

    console.log(nappain);

    if (audio !== null) {
        audio.currentTime = 0;
        audio.play();
    }

    let visualSelector = '[data-key ="' + nappain + '"]';
    let key =  document.querySelector(visualSelector);
    key.classList.add('playing');

    var keys = document.querySelectorAll('.key');
    keys.forEach(function(key) {
        key.addEventListener('transitionend', revertStyle);
    })
}

function revertStyle(event) {
    if (event.propertyName === 'transform') {
        this.classList.remove('playing');
    }
}



/* function removeClass (event){
    let nappain = event.keyCode;
    let visualSelector = '[data-key ="' + nappain + '"]';
    let key =  document.querySelector(visualSelector);
    key.classList.remove('playing');
} */


window.addEventListener('keydown', playSound);
// window.addEventListener('keyup', removeClass);
