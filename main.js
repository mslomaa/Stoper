const btnStart = document.querySelector('.main');

const btnReset = document.querySelector('.reset');

const clock = document.querySelector('.time div')

const nowTime = new Date().getTime();

let time = 0;
let active = false;
let id;


const counter = () => {
    if(!active){
        active = !active
        btnStart.textContent = 'pauza';
        id = setInterval(start, 10)
    } else {
        active = !active
        btnStart.textContent = 'start';
        clearInterval(id);

    }
}

const start = () => {
    time++;
    clock.textContent = (time / 100).toFixed(3)
}

btnStart.addEventListener('click', counter)


btnReset.addEventListener('click', () => {
   time = 0;
   clock.textContent = '---';
   clearInterval(id);
   btnStart.textContent = 'start';
   active = false;

});