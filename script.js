function computerPlay() {
    const arr = ['ROCK', 'PAPER', 'SCISSORS'];
    return arr[Math.floor(Math.random() * arr.length)];
}

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

function game() {
    while (playerScore < 5 && computerScore < 5){
    
    const computerSelection = computerPlay();
    console.log(`Computer chose ${computerSelection}`);

    const playerSelection = (window.prompt("Select your weapon", "Rock - Paper - Scissors")).toUpperCase();
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
console.log('Happy New year');

let playerScore = 0;
let computerScore = 0;
let gameTally = 0;

game();



// console.log(playRound(playerSelection, computerSelection));


// const computerSelection = () => arr[Math.floor(Math.random() * arr.length)];

// function computerPlay() {
//     computerSelection = arr[Math.floor(Math.random() * arr.length)];
//     return computerSelection;
// }