// Get random play by computer; called by game()
function computerPlay() {
    const arr = ['ROCK', 'PAPER', 'SCISSORS'];
    return arr[Math.floor(Math.random() * arr.length)];
}

// CAlled by game(); Assesses player choice against computer's and shows result- win/lose; update scores
function playRound(playerSelection, computerSelection) {
    result = "";
    if (playerSelection == computerSelection) {
        console.log('TIE GAME');
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        console.log(`You lose. PAPER covers ROCK`);
        computerScore ++;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        console.log(`Computer lost. ROCK crushes SCISSORS`);
        playerScore ++;
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        console.log(`Computer lost. PAPER covers ROCK`);
        playerScore ++;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        console.log(`You lose. SCISSORS cut PAPER`);
        computerScore ++;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        console.log(`You lose. ROCK crushes SCISSORS`);
        computerScore ++;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        console.log(`Computer lost. SCISSORS cut PAPER`);
        playerScore ++;
    }
}

// run the game
function game() {
    while (playerScore < 5 && computerScore < 5){
    let playerSelection="";
    let userInput=null;
    const computerSelection = computerPlay();
    
// Screen for user input to allow only R, P or S
    userInput = window.prompt("Select your weapon", "ROCK - PAPER - SCISSORS : To exit, type 'q'");
    
    while (userInput == null || userInput == "" || userInput == 'q' || userInput == "ROCK - PAPER - SCISSORS : To exit, type 'q'") {
        console.log('Either you chose to quit OR your input is invalid. Game is quitting');
        return;
    }
    playerSelection = userInput.toUpperCase();
    console.log(`You selected ${playerSelection}`);
    
    playRound(playerSelection, computerSelection);
    gameTally++;

    console.log(`GAME TALLY:${gameTally} || PLAYER: ${playerScore} COMPUTER: ${computerScore}`)
    if (playerScore==5) {
        console.log ('!! Game Over: YOU WIN !!')
    } else if (computerScore == 5) {
        console.log(' Game Over: YOU LOST :( ')
    }
}
}

let playerScore = 0;
let computerScore = 0;
let gameTally = 0;

// game();