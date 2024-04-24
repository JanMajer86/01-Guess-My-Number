'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;
const number = document.querySelector('.number');

const checkButton = document.querySelector('.check');
const scoreText = document.querySelector('.score');
const againButton = document.querySelector('.again');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When No Input
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('🤬 You loose!');
      scoreText.textContent = 0;
    }
  }
});

againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  displayMessage('Start guessing...');
  scoreText.textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
