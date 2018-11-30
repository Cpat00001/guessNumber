//const values
let min = 1,
    max = 10,
  winningNum = Math.floor((Math.random()*10)+1);
    guessesLeft = 3;

const game = document.querySelector('#game'),
     minNum = document.querySelector('.min-num'),
     maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for quess
guessBtn.addEventListener('mousedown', attempt);

//function attempt
function attempt(){
  
  let guess = parseInt(guessInput.value);
   
if(isNaN(guess) || guess < min || guess > max ){
   setMessage(`Please enter a number between ${min} and ${max}`,'red');
}else{
    setMessage(`your input is ${guess}`,'green');
    //check if guess number is ===  winningNum
  if (guess === winningNum){

    gameOver(true, `${winningNum} is correct, you won`  );
    newGame();

  }else{
    //clear input
    guessInput.value = '';
    setMessage(`your input is ${guess}, it is not a correct number`,'red');

    guessesLeft -= 1;
    setMessage(`you have left ${guessesLeft}`,'red')
    if (guessesLeft === 0){
     
      gameOver(false, `Game over. the correct number was ${winningNum}`);
      newGame();
    }
  } 
}
}

//new game
function newGame(){
  guessBtn.value = "New game";
  guessBtn.style.backgroundColor = 'orange';
  guessBtn.className += 'play-again';
}

// Game over function

function gameOver(won,msg){
  let color;

  won === true ? color = 'green' : color = 'red';
  
  //Disable input
  guessInput.disabled = true;
  //border green
  guessInput.style.borderColor = color;
  //text green
  guessInput.style.borderColor = color;
  //game over - won
  setMessage(msg);

}
// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

//Play again a game event listener
game.addEventListener('mousedown', reloadpage)

//function to reloadpage after 3sek
function xxx(){
  window.location.reload();
}

//function reloadpage
function reloadpage(e){
    if(e.target.className === 'play-again'){
      setTimeout(xxx, 3000);
    }
}

//if (e.target.className === 'play-again') {
// window.location.reload();
//   }
// }
// setTimeout(reloadpage, 3000);

// document.querySelector('.play-again').addEventListener('mousedown', function () {
//   location.reload();
// })



