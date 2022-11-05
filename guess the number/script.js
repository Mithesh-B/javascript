"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let defaultScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  //when no number is entered
  if (!guess) {
    displayMessage("please enter a number");
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("YOU WIN!!");
    displayScore(defaultScore);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (defaultScore > highScore) {
      highScore = defaultScore;
      document.querySelector(".highscore").textContent = highScore;
    }
    // when entered value is diffrent the secretNumber
  } else if (guess !== secretNumber) {
    if (defaultScore > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      guess > secretNumber ? "Too high!" : "Too low!";
      defaultScore--;
      displayScore(defaultScore);
    } else {
      displayMessage("you lost the game!");
      displayScore((defaultScore = 0));
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  defaultScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  displayScore(defaultScore);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
