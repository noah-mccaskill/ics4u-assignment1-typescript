/**
 * The program
 *
 *
 * By:      Noah McCaskill
 * Version: 1.0`
 * Since:   2022-09-20
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
// let userInput = rock, paper, or scissors.

const userInput = prompt('Enter your move, Rock, Paper or Scissors: ')

// checks if input is valid
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  // bot receives random number from 1 - 3.
  const maximum = 3
  const minimum = 1

  // generates random number
  const randomNumber = Math.floor(Math.random() * maximum) + minimum
  let computerChoice = String(randomNumber)

  // program assigns number to rock, paper, scissors.
  if (randomNumber === 1) {
    computerChoice = 'rock'
  } else if (randomNumber === 2) {
    computerChoice = 'paper'
  } else {
    computerChoice = 'scissors'
  }

  // program runs through all the combinations, and checks if the userInput
  // wins, loses, or ties the botPlayer.
  if (computerChoice === userInput) {
    console.log(`It was a tie! ${computerChoice} equals ${userInput}!`)
  } else if (
    (computerChoice === 'paper' && userInput === 'rock') ||
    (computerChoice === 'scissors' && userInput === 'paper') ||
    (computerChoice === 'rock' && userInput === 'scissors')
  ) {
    console.log(`Computer won! ${computerChoice} beat ${userInput}!`)
  } else {
    console.log(`You won! ${userInput} beat ${computerChoice}!`)
  }
} else {
  // check if the input is valid
  console.log('That is not a valid Input')
}
console.log('\nDone.')
