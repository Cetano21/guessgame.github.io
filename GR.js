"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreN = 20;
let highscoreN = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔No number ⛔");
  } else if (guess === secretNumber) {
    displayMessage("👏 Μπραβο κερδισες 👏");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#FFD700";
    document.querySelector(".number").style.width = "30rem";
    if (scoreN > highscoreN) {
      highscoreN = scoreN;
      document.querySelector(".highscoreN").textContent = highscoreN;
    }
  } else if (guess !== secretNumber) {
    if (scoreN > 1) {
      displayMessage(
        guess > secretNumber ? "🔼 Υψηλος αριθμος 🔼" : "🔽 Χαμηλος αριθμος 🔽"
      );
      scoreN--;
      document.querySelector(".scoreN").textContent = scoreN;
    } else {
      displayMessage("😭 Μολις εχασες 😭");
      document.querySelector(".scoreN").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  scoreN = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent =
    "🤭 Πληκτρολογησε τον αριθμο και πατα enter 🙄";
  document.querySelector(".scoreN").textContent = scoreN;
  document.querySelector(".number").textContent = "🎰";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#ff1493";
  document.querySelector(".number").style.width = "16.2rem";
});
