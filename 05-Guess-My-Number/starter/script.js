'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 13;

// document.querySelector('.guess').value;
document.addEventListener("DOMContentLoaded", function (event) {

    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    let score = 20
    let highscore = 0

    const displayMessage = function (message) {
        document.querySelector('.message').textContent = message
    }
    
    // Read users guess and store it as a variable
    document.querySelector('.check').addEventListener('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);
        
        // When there is no input
        if (!guess) {
            displayMessage('⛔️ No number!')
            
        // When the player wins
        } else if (guess === secretNumber) {
            displayMessage('🎉 Correct Number!')
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.highscore').textContent = score;

            if (score < highscore) {
                highscore = score
                document.querySelector('.highscore').textContent = highscore;
            }
            
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            
        // When the guess is wrong, use turnary operator: ? value1 : value 2
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? '🤷🏻‍♂️ Too high!' : '🤷🏻‍♂️ Too low!')
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('💥 You lost the game!')
                document.querySelector('.score').textContent = 0;
            }
        };

        document.querySelector('.again').addEventListener('click', function () {
            score = 20;
            secretNumber = Math.trunc(Math.random() * 20) + 1;

            // Reset elements
            displayMessage('Start guessing...')
            document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = '?';
            document.querySelector('.guess').value = ''

            // Reset styles
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
        });
    })
})
