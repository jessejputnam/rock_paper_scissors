"use strict";
const computerPlay = function () {
  let roll = Math.ceil(Math.random() * 3);
  return roll === 1 ? "Rock" : roll === 2 ? "Paper" : "Scissors";
};

console.log(computerPlay());
