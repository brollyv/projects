'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
// Rolling Dice functionality

btnRoll.addEventListener('click', function () {
  // 1. Generate random no. from 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolling 1 (true) => switch to next player

  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    // IMPLEMENT LATER FOR 2ND PLAYER
    current0El.textContent = currentScore;
  } else {
    // Switch to next player
  }
});
