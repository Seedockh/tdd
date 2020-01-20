export class TennisGame {
  constructor(playerOneName, playerTwoName) {
    this.playerOne = { name: playerOneName, score: 0 }
    this.playerTwo = { name: playerTwoName, score: 0 }
  }

  scorePlayerOne() {
    this.playerOne.score++
  }

  scorePlayerTwo() {
    this.playerTwo.score++
  }

  displayScore() {
    // Equal scores :
    if (this.playerOne.score === 3 && this.playerTwo.score === 3) {
      return 'deuce'
    }

    if (this.playerOne.score === 4 && this.playerTwo.score === 4) {
      this.playerOne.score--
      this.playerTwo.score--
      return 'deuce'
    }

    // Advantages :
    if (this.playerOne.score === 4 && this.playerTwo.score === 3) {
      return `Avantage: ${this.playerOne.name}`
    }

    if (this.playerOne.score === 3 && this.playerTwo.score === 4) {
      return `Avantage: ${this.playerTwo.name}`
    }

    // Winning :
    if (this.playerOne.score === 5 ||
      (this.playerOne.score === 4 && this.playerTwo.score < 3)
    ) {
      return `Nous avons un gagnant: ${this.playerOne.name}.`
    }

    if (this.playerTwo.score === 5 ||
      (this.playerTwo.score === 4 && this.playerOne.score < 3)
    ) {
      return `Nous avons un gagnant: ${this.playerTwo.name}.`
    }

    // Display :
    return `${this.setScoreToDisplay(this.playerOne.score)}-${this.setScoreToDisplay(this.playerTwo.score)}`
  }

  setScoreToDisplay(score) {
    switch (score) {
      case 0: return '0'
      case 1: return '15'
      case 2: return '30'
      case 3: return '40'
      default: throw new Error('Wrong score sent')
    }
  }
}
