'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Number';

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 22;

// document.querySelector('.guess').value;
// console.log(document.querySelector('.guess').value = 23);


// Getting Number input from input value.

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value);
   // console.log(guess, typeof guess);
   if (!guess) {
      document.querySelector('.message').textContent = 'Please Enter a First';
   } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🥳 Correct Number';
   } else if (secretNumber < guess) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
   } else if (secretNumber > guess) {
      document.querySelector('.message').textContent = 'Number is Low';
      score--;
   }
});