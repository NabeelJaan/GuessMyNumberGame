'use strict';

// Generating a randon number between 1 to 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
   document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value);
   // check the Number
   if (!guess) {
      displayMessage('Please Enter a First');
   } else if (guess === secretNumber) {
      // Success message
      displayMessage('You Guess the Right Number');
      document.querySelector('.number').textContent = secretNumber;
      // Change the background color
      document.querySelector('body').style.backgroundColor = '#60b343';
      // change Number box width
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }
      // Check the Number is too High
   } else if (guess !== secretNumber) {
      if (score > 1) {
         displayMessage(guess > secretNumber ? 'Number is High' : 'Number is Low');
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         displayMessage('You lost the game');
         document.querySelector('.score').textContent = 0;
      }
   }
});

document.querySelector('.again').addEventListener('click', function () {
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').textContent = '?';
   document.querySelector('.number').style.width = '15rem';
   document.querySelector('.guess').value = '';
   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('.score').textContent = 20;
});