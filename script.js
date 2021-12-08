"use strict";

//  DECLARE DOM VARIABLES
const playerSelectChoice = document.querySelectorAll(".player__choice");
const playRock = document.querySelector(".player__playarea__rock");
const playPaper = document.querySelector(".player__playarea__paper");
const playScissors = document.querySelector(".player__playarea__scissors");
const actionPlayRound = document.querySelector(".player__action__btn");
const computerChoiceImg = document.querySelector(".comp__playarea__turn");
const computerChoiceDisplay = document.querySelector(
  ".comp__playarea__compchoice"
);
const displayPlayerScore = document.querySelector(".scoreboard__player__score");
const displayComputerScore = document.querySelector(".scoreboard__comp__score");
const gameOver = document.querySelector(".gameover__title");

// DECLARE STORED INFO VARIABLES
let playerSelect, computerSelect;
let computerScoreStored = 0;
let playerScoreStored = 0;

const computerPlay = function () {
  let roll = Math.ceil(Math.random() * 3);
  return roll === 1 ? "rock" : roll === 2 ? "paper" : "scissors";
};
const newRound = function () {
  playerSelect = "";
  computerSelect = "";
};

// Player select choice
playerSelectChoice.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    playerSelect = selection.alt;
    // add in CSS class AND transition height and width 1s in player__choice style block
    selection.classList.add("selected-item");
  });
});

document.addEventListener("click", () => {
  if (playerSelect !== "rock") playRock.classList.remove("selected-item");
  if (playerSelect !== "paper") playPaper.classList.remove("selected-item");
  if (playerSelect !== "scissors")
    playScissors.classList.remove("selected-item");
});

// Play Round
actionPlayRound.addEventListener("click", () => {
  computerSelect = computerPlay();
  computerChoiceDisplay.innerText = computerSelect;
});

/*
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
*/
