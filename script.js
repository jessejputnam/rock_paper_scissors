"use strict";

// Computer input
const computerPlay = function () {
  let roll = Math.ceil(Math.random() * 3);
  return roll === 1 ? "rock" : roll === 2 ? "paper" : "scissors";
};

// Play a round
const playRound = function (playerSelection, computerSelection) {
  // player lose
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "Lose";
  }

  // player win
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Win";
  }

  // tie game
  if (playerSelection === computerSelection) {
    return "Tie";
  }
};

// Play multiple rounds
const game = function (rounds) {
  let playerScore = 0;
  let computerScore = 0;
  let roundsLeft = rounds;

  // Loop for games.
  while (roundsLeft > 0) {
    // Player prompt
    let playerPlay = prompt("Rock, paper, or scissors? Choose!").toLowerCase();

    while (
      playerPlay !== "rock" &&
      playerPlay !== "paper" &&
      playerPlay !== "scissors"
    ) {
      playerPlay = prompt(
        "Invalid input. Please select from rock, scissors, or paper."
      );
    }

    // Play one round. Assign it win/lose/tie
    let oneRound = playRound(playerPlay, computerPlay());

    // How to handle round result
    if (oneRound === "Win") {
      playerScore++;
      roundsLeft--;
    }
    if (oneRound === "Lose") {
      computerScore++;
      roundsLeft--;
    }
  }

  // Winning conditions
  return playerScore > computerScore
    ? `You win! Player: ${playerScore} vs. Computer: ${computerScore}`
    : `You lose! Computer: ${computerScore} vs Player: ${playerScore}`;
};

console.log(game(5));
