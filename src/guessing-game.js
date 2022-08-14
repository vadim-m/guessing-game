class GuessingGame {
  setRange(min, max) {
    this.first = min;
    this.last = max;
  }

  guess() {
    return (this.middle = Math.ceil((this.first + this.last) / 2));
  }

  lower() {
    this.last = this.middle;
  }

  greater() {
    this.first = this.middle;
  }
}

module.exports = GuessingGame;
