"use strict";
//toggle button
const toggle = document.getElementById("toggle");
const pageBody = document.body;

toggle.addEventListener("input", (e) => {
 const isChecked = e.target.checked;

 if (isChecked) {
  pageBody.classList.add("dark-theme");
 } else {
  pageBody.classList.remove("dark-theme");
 }
});

//the game functionalities
// document.querySelector('.score').textContent = 6737;
// document.querySelector('.guess').value = 456;
const checkBtn = document.querySelector(".check");
const showNumber = document.querySelector(".question");
const message = document.querySelector(".message");
let userScore = document.querySelector(".score");
const userHighScore = document.querySelector(".highscore");
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let playAgain;
playAgain = document.querySelector(".again");
console.log(randomNumber);
let score = 20;
let highScore = 0;
const displayMessage = function (msg) {
    message.textContent = msg;
}

checkBtn.addEventListener("click", function () {
 const inputNumber = Number(document.querySelector(".guess").value);

 console.log(inputNumber);
 if (!inputNumber) {
  message.textContent = "🚩Not a number";
 } else if (inputNumber === randomNumber) {
  displayMessage("Correct Number");
  document.getElementById("body").style.backgroundColor = "#60b347";
     document.querySelector(".question").textContent = randomNumber;
     
     if (score > highScore) {
         highScore = score;
         document.querySelector('.highscore').textContent = highScore;
     }
 } else if (inputNumber !== randomNumber) {
  if (score > 10) {
   message.textContent = inputNumber > randomNumber ? "📈Number is too high" : "📉Number is too low";
   score--;
   document.querySelector(".score").textContent = score;
  } else {
   document.querySelector(".score").textContent = 10;
   document.getElementById("body").style.backgroundColor = "red";
   alert("🤦‍♀️Oops you lost the game. Try again");
  }
 }
});

playAgain.addEventListener("click", function () {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    console.log(randomNumber);
    message.textContent = "Start guessing...";
    document.getElementById("body").style.backgroundColor = "initial";
    document.querySelector('.question').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});
