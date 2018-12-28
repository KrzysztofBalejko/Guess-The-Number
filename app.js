let min = 1;
let max = 10;

let winningNum = 2;
let guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  if(isNaN(guess) || guess < min || guess > max) {
     setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
     // Winning
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct! YOU WIN!`, 'green');
  } else {
    // Losing
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      guessInput.disabled = true;
      guessInput.style.borderColor = 'red';
      setMessage(`Game over, you lost! The correct number was ${winningNum}`, 'red');
    } else {
      guessInput.style.borderColor = 'red';
      guessInput.value ='';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    }
  }
});

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}