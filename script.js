"use strict";

//  DECLARE DOM VARIABLES
const playerSelectChoice = document.querySelectorAll(".player__choice");
const playRock = document.querySelector(".player__playarea__rock");
const playPaper = document.querySelector(".player__playarea__paper");
const playScissors = document.querySelector(".player__playarea__scissors");
const actionPlayRound = document.querySelector(".player__action__btn");
const computerChoiceImg = document.querySelector(".comp__playarea__turn");
const displayPlayerScore = document.querySelector(".scoreboard__player__score");
const displayComputerScore = document.querySelector(".scoreboard__comp__score");
const gameOver = document.querySelector(".gameover__title");
const playerNoSelect = document.querySelector(".player__no-selection");
const nextRoundBtn = document.querySelector(".next__round");
const nextRoundBtnBold = document.querySelector(".next__round--bold");
const startGame = document.querySelector(".modal");
const startGameTitle = document.querySelector(".modal-title");
const startGameText = document.querySelector(".modal-p");
const mainPage = document.querySelector(".main-page");
const gameBoard = document.querySelector(".gameboard");

// DECLARE STORED INFO VARIABLES
let playerSelect, computerSelect, roundWinner, gameWinner;
let computerScoreStored = 0;
let playerScoreStored = 0;

const computerPlay = function () {
  let roll = Math.ceil(Math.random() * 3);
  return roll === 1 ? "rock" : roll === 2 ? "paper" : "scissors";
};

// GAME STATES
const nextRound = function () {
  roundWinner = "";
  playerSelect = undefined;
  computerSelect = "";

  nextRoundBtn.classList.add("hidden");

  computerChoiceImg.src = "images/question-mark.png";
  playRock.classList.remove("selected-item");
  playPaper.classList.remove("selected-item");
  playScissors.classList.remove("selected-item");
};

// Player select choice
playerSelectChoice.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    if (mainPage.classList.contains("background--blur")) return;
    playerSelect = selection.alt;
    selection.classList.add("selected-item");
    if (playerSelect !== undefined) playerNoSelect.classList.add("hidden");
  });
});

document.addEventListener("click", () => {
  if (playerSelect !== "rock") playRock.classList.remove("selected-item");
  if (playerSelect !== "paper") playPaper.classList.remove("selected-item");
  if (playerSelect !== "scissors")
    playScissors.classList.remove("selected-item");
});

// Start Game
startGame.addEventListener("click", () => {
  gameBoard.classList.remove("background--blur");
  mainPage.classList.remove("background--blur");
  startGame.classList.add("hidden");

  playerScoreStored = 0;
  computerScoreStored = 0;
  displayPlayerScore.innerText = playerScoreStored;
  displayComputerScore.innerText = computerScoreStored;

  playRock.classList.remove("selected-item");
  playPaper.classList.remove("selected-item");
  playScissors.classList.remove("selected-item");

  computerChoiceImg.src = "images/question-mark.png";

  gameOver.innerText = "";

  // Play Round
  actionPlayRound.addEventListener("click", () => {
    if (mainPage.classList.contains("background--blur")) return;
    // prompt player to choose if round played without choice
    if (playerSelect === undefined) {
      playerNoSelect.classList.remove("hidden");
      return;
    }

    // Computer's Turn
    computerSelect = computerPlay();

    if (computerSelect === "rock") {
      computerChoiceImg.src = "images/rock-clipart.png";
    }
    if (computerSelect === "paper") {
      computerChoiceImg.src = "images/paper-clipart.png";
    }
    if (computerSelect === "scissors") {
      computerChoiceImg.src = "images/scissors-clipart.png";
    }

    // Player Loses
    if (
      (playerSelect === "rock" && computerSelect === "paper") ||
      (playerSelect === "paper" && computerSelect === "scissors") ||
      (playerSelect === "scissors" && computerSelect === "rock")
    ) {
      roundWinner = "comp";
      computerScoreStored++;
      nextRoundBtn.innerText = "Computer Wins \n NEXT ROUND";
    }

    // Player Wins
    if (
      (playerSelect === "rock" && computerSelect === "scissors") ||
      (playerSelect === "paper" && computerSelect === "rock") ||
      (playerSelect === "scissors" && computerSelect === "paper")
    ) {
      roundWinner = "player";
      playerScoreStored++;
      nextRoundBtn.innerText = "Player Wins \n NEXT ROUND";
    }

    // Tie
    if (
      (playerSelect === "rock" && computerSelect === "rock") ||
      (playerSelect === "paper" && computerSelect === "paper") ||
      (playerSelect === "scissors" && computerSelect === "scissors")
    ) {
      nextRoundBtn.innerText = "Tie: No Points \n NEXT ROUND";
    }

    // Update Scores
    displayPlayerScore.innerText = playerScoreStored;
    displayComputerScore.innerText = computerScoreStored;

    // Winning Conditions
    //      Next Round
    if (computerScoreStored !== 5 && playerScoreStored !== 5) {
      nextRoundBtn.classList.remove("hidden");
      gameBoard.classList.add("background--blur");
      mainPage.classList.add("background--blur");
    }

    //      Player Win
    if (playerScoreStored === 5) {
      startGameTitle.innerText = "Restart";
      startGameText.innerText = "Player Wins!";
      startGame.classList.remove("hidden");
      mainPage.classList.add("background--blur");
      gameBoard.classList.add("background--blur");

      gameOver.innerText = "Player Wins";
    }

    //      Computer Win
    if (computerScoreStored === 5) {
      startGameTitle.innerText = "Restart";
      startGameText.innerText = "Computer Wins!";
      startGame.classList.remove("hidden");
      gameOver.innerText = "Player Loses";
    }
  });

  // Start New Round
  nextRoundBtn.addEventListener("click", () => {
    nextRound();
    gameBoard.classList.remove("background--blur");
    mainPage.classList.remove("background--blur");
  });
});
