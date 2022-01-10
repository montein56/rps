let playerScore = 0;
let computerScore = 0;
let gameTally = 0;

const results = document.getElementById("results");
const boardLeft = document.getElementById('boardLeft');
const boardCenter = document.getElementById('boardCenter');
const boardRight = document.getElementById('boardRight');
const playerChoice = document.getElementById('playerChoice');
const compChoice = document.getElementById('compChoice');
const thumb = document.getElementById('thumb');
const gameTune = document.getElementById("gameTune");
const winTune = document.getElementById("winTune");
const loseTune = document.getElementById("loseTune");

const playerChoiceImage = playerChoice.firstElementChild;


const game = function() { // THIS FUNCTION HAS TO BE ABOVE the lines below it that set the eventlisteners
    playGameTune();
    const playerSelection = this.getAttribute("id");
    while (playerScore < 5 && computerScore < 5){

        const computerSelection = computerPlay();        
        playRound(playerSelection, computerSelection);
        setDisplay(playerSelection, computerSelection);

        // winCheck();
       
        //CHECK IF A WIN
        if (playerScore < 5 && computerScore < 5){
                results.classList.remove("hidden");// turn on display
            return;
        } else if (playerScore == 5) {//set the display
            boardLeft.textContent = "Game Over: YOU WON";
            pauseGameTune();
            playWinTune();
            gameOver();
        } else if (computerScore == 5) {//set the display
            boardLeft.textContent = "Game Over: YOU LOST";
            pauseGameTune();
            playLoseTune();
            gameOver();
        }
}
}
//SET EVENT LISTENER TO THE 3 WEAPONS THAT PLAYER WILL SELECT
const items = document.getElementsByClassName("item");//beginning code: MUST BE below game()
for (i = 0; i < items.length; i++) {
    items[i].addEventListener('click', game, false);
}

function setDisplay(x, y){
    //set left items to player
    playerChoiceImage.setAttribute('src',`../rps/images/${x}`);
    boardLeft.textContent = (resultLeft);

    //set right items to robot     
    const compChoiceImage = compChoice.firstElementChild;
    compChoiceImage.setAttribute('src',`../rps/images/${y}`);
    boardRight.textContent = (resultRight);

    //SET SCORE BOARD
    boardCenter.textContent= `GAME TALLY:  ${gameTally} \u000a You:  ${playerScore}\u000aRobot: ${computerScore}`;
    results.classList.add("hidden");//to remove last play results
}

function gameOver(){
    setTimeout(function() {
        boardLeft.style["boxShadow"] = "3px 3px 40px 20px #f00";
        results.classList.remove("hidden");//turn on center 
    }, 250);

    thumb.style["opacity"] = ".1"; //thumb area images/text
    playerChoice.style["opacity"] = ".1";
    compChoice.style["opacity"] = ".1";
    
    setTimeout(function() {//change center display: QUIT? AGAIN?
        boardRight.style["boxShadow"] = "3px 3px 40px 20px #0f0";
        boardRight.style.backgroundColor = "#0f0";
        boardRight.textContent = "PLAY again?";
        boardLeft.style["boxShadow"] = "3px 3px 40px 20px #0f0";
        boardLeft.style.backgroundColor = "#0f0";
        boardLeft.textContent = "QUIT game?";
    }, 2000);
 
    setTimeout(function() {
        replay();
    }, 3000);
}

function replay(){
    boardLeft.addEventListener("click", quit, false);
    boardRight.addEventListener("click", again, false);
}
function quit(){
    window.close();
}
function again(){
    location.reload();
}

function computerPlay() {
    const arr = ['ROCK', 'PAPER', 'SCISSORS'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
    resultRight = "Select your next weapon";
    if (playerSelection == computerSelection) {
        resultLeft = "TIE GAME";
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        resultLeft = "You lose. Paper covers rock";
        computerScore ++;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        resultLeft = "You won. Rock crushes scissors"
        playerScore ++;
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        resultLeft = "You won. Paper covers rock"
        console.log(`Computer lost. Paper covers rock`);
        playerScore ++;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        resultLeft="You lost. Scissors cut paper";
        console.log(`You lose. Scissors cuts paper`);
        computerScore ++;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        resultLeft="You lost. Rock crushes scissors";
        console.log(`You lose. Rock crushes scissors`);
        computerScore ++;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        resultLeft="You won. Scissors cuts paper";
         console.log(`Computer lost. scissors cut paper`);
        playerScore ++;
    }
    gameTally++;
}

function playGameTune() { 
  gameTune.play(); 
} 

function pauseGameTune() { 
  gameTune.pause(); 
}

function playWinTune() { 
    winTune.play(); 
  } 
  
  function playLoseTune() { 
    loseTune.play(); 
  }