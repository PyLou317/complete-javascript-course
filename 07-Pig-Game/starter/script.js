'use strict';

// Elements -----
const btnNewGame = document.querySelector('.btn--new')
const btnRollDice = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')

const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')

const p1ScoreEl = document.getElementById('score--0')
const p2ScoreEl = document.getElementById('score--1')
const currentScore1 = document.getElementById('current--0')
const currentScore2 = document.getElementById('current--1')

// Hide Dice and set scores to 0
p1ScoreEl.textContent = 0;
p2ScoreEl.textContent = 0;
diceEl.classList.add('hidden')

let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    p1ScoreEl.textContent = 0;
    p2ScoreEl.textContent = 0;
    currentScore1.textContent = 0
    currentScore2.textContent = 0
    
    diceEl.classList.add('hidden')
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
}

init()

const switchPlayer = function () {   
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
}

// Rolling dice functionality
btnRollDice.addEventListener('click', function () {
    if (playing) {
        //  1. Generate random roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
    
        // 2. Show dice
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`
    
        // Check for rolled 1
        if (dice !== 1) {
            // Add to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            // Switch Player
            switchPlayer()
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to active players score
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        
        // 2. Check id score is >= 100
        // Finish game
        if (scores[activePlayer] >= 100) {
            playing = false
            diceEl.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // 3. Switch player
            switchPlayer();
        }
    }
})

btnNewGame.addEventListener('click', init)