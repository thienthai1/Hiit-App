let countdown;
let timeLeft = 15;
let isPaused = true;
let setCounter = 0;

const timerElement = document.getElementById('timer');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const setCounterElement = document.getElementById('setCounter');

function updateTimer() {
    timerElement.textContent = timeLeft;
}

function startPause() {
    if (isPaused) {
        startPauseBtn.textContent = 'Pause';
        resetBtn.disabled = false;
        countdown = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimer();
            } else {
                clearInterval(countdown);
                timeLeft = 15;  // Reset timeLeft to 15
                updateTimer();
                startPauseBtn.textContent = 'Start';
                resetBtn.disabled = true;
                isPaused = true;
            }
        }, 1000);
    } else {
        clearInterval(countdown);
        startPauseBtn.textContent = 'Start';
    }
    isPaused = !isPaused;
}

function reset() {
    clearInterval(countdown);
    timeLeft = 15;
    updateTimer();
    startPauseBtn.textContent = 'Start';
    isPaused = true;
    resetBtn.disabled = true;
}

function increaseSet() {
    setCounter++;
    setCounterElement.textContent = setCounter;
}

function decreaseSet() {
    if (setCounter > 0) {
        setCounter--;
        setCounterElement.textContent = setCounter;
    }
}

// Initialize the timer and set display
updateTimer();
setCounterElement.textContent = setCounter;
