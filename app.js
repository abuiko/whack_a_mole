const grid = document.querySelector('.grid');
const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');
let currentTime = timeLeft.textContent;

let result = 0;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(timerId);
        alert("GAME OVER");
    }
}

let timerId = setInterval(countDown, 1000);