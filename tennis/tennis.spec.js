import { TennisGame } from './tennis'

describe('tennis game', () => {
  const tennisGame = new TennisGame('John', 'Jack')

  test('it creates a tennis game correctly', () => {
    expect(JSON.stringify(tennisGame)).toBe(JSON.stringify({
      playerOne: { name: 'John', score: 0 },
      playerTwo: { name: 'Jack', score: 0 },
    }))
  })

  test('it displays score correctly', () => {
    expect(tennisGame.displayScore()).toBe('0-0')
  })

  test('it displays 1-0 score correctly', () => {
    tennisGame.scorePlayerOne()
    expect(tennisGame.displayScore()).toBe('15-0')
  })

  test('it increases 1-1 score correctly', () => {
    tennisGame.scorePlayerTwo()
    expect(tennisGame.displayScore()).toBe('15-15')
  })

  test('it displays 1-2 score correctly', () => {
    tennisGame.scorePlayerTwo()
    expect(tennisGame.displayScore()).toBe('15-30')
  })

  test('it increases 2-2 score correctly', () => {
    tennisGame.scorePlayerOne()
    expect(tennisGame.displayScore()).toBe('30-30')
  })

  test('it displays 3-2 score correctly', () => {
    tennisGame.scorePlayerOne()
    expect(tennisGame.displayScore()).toBe('40-30')
  })

  test('it increases 3-3 score correctly', () => {
    tennisGame.scorePlayerTwo()
    expect(tennisGame.displayScore()).toBe('deuce')
  })

  test('it handles game workflow correctly', () => {
    const game = (new TennisGame("André", "Pete"));
    game.displayScore()
    expect(game.displayScore()).toBe("0-0")
    game.scorePlayerOne()
    game.displayScore()
    expect(game.displayScore()).toBe("15-0")
    game.scorePlayerOne()
    game.scorePlayerOne()
    game.displayScore()
    expect(game.displayScore()).toBe("40-0")
    game.scorePlayerTwo()
    game.scorePlayerTwo()
    game.scorePlayerTwo()
    game.displayScore()
    expect(game.displayScore()).toBe("deuce")
    game.scorePlayerTwo()
    game.displayScore()
    expect(game.displayScore()).toBe("Avantage: Pete")
    game.scorePlayerOne()
    game.displayScore()
    expect(game.displayScore()).toBe("deuce")
    game.scorePlayerOne()
    game.displayScore()
    expect(game.displayScore()).toBe("Avantage: André")
    game.scorePlayerOne()
    game.displayScore()
    expect(game.displayScore()).toBe("Nous avons un gagnant: André.")
  })
})
