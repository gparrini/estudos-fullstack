class Stopwatch {
  #elapsedTimeInSeconds = 0;
  #intervalId = null;

  start(callback = () => {}) {
    this.#intervalId = setInterval(() => {
      this.#elapsedTimeInSeconds++;
      // console.log(this.elapsedTime);
      callback();
    }, 1000);
  }

  stop(callback = () => {}) {
    clearInterval(this.#intervalId);
    callback();
  }

  reset(callback = () => {}) {
    this.#elapsedTimeInSeconds = 0;
    callback();
  }

  get elapsedTime() {
    return Stopwatch.formatTime(this.#elapsedTimeInSeconds);
  }

  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    return `${Stopwatch.zeroPadding(hours)}:${Stopwatch.zeroPadding(
      minutes
    )}:${Stopwatch.zeroPadding(seconds)}`;
  }

  static zeroPadding(originalNumber, desireAmountDigits = 2) {
    let stringNumber = String(originalNumber);
    const zeroesRequired = desireAmountDigits - stringNumber.length;

    if (zeroesRequired <= 0) {
      return stringNumber;
    }

    for (let counter = 0; counter < zeroesRequired; counter++) {
      stringNumber = `0${stringNumber}`;
    }

    return stringNumber;
  }
}

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const stopwatchDisplay = document.getElementById("stopwatch-display");

function updateDisplay() {
  stopwatchDisplay.innerHTML = sw1.elapsedTime;
}

const sw1 = new Stopwatch();

startBtn.addEventListener("click", () => {
  sw1.start(updateDisplay);
});

stopBtn.addEventListener("click", () => {
  sw1.stop();
});

resetBtn.addEventListener("click", () => {
  sw1.reset(updateDisplay);
});
