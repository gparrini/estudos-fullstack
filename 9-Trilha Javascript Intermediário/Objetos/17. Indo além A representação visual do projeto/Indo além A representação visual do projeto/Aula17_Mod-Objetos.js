class Stopwatch {
  #elapsedTimeInSeconds = 0;
  #intervalId = null;

  start(callback = () => {}) {
    this.#intervalId = setInterval(() => {
      this.#elapsedTimeInSeconds++;
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

  static formatTime(timeSeconds) {
    const hours = Math.floor(timeSeconds / 3600);
    const minutes = Math.floor((timeSeconds % 3600) / 60);
    const seconds = timeSeconds - hours * 3600 - minutes * 60;

    return `${Stopwatch.zeroPadding(hours)}:${Stopwatch.zeroPadding(minutes)}:${Stopwatch.zeroPadding(seconds)}`;
  }

  static zeroPadding(originalNumber, desiredAmoutnDigits = 2) {
    let stringNumber = String(originalNumber);
    const zerosRequired = desiredAmoutnDigits - stringNumber.length();

    if(zerosRequired <= 0) {
      return stringNumber;
    }

    for(let counter = 0; counter < zerosRequired; counter++) {
      stringNumber = `0${stringNumber}`;
    }

    return stringNumber;
  }
}

const sw1 = new Stopwatch();
sw1.start();
