
function computerPlay() {
    const arr = ['ROCK', 'PAPER', 'SCISSORS'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
    result = "";
    if (playerSelection == computerSelection) {
        result = 'TIE GAME';
        return result;
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        result = `You lose. PAPER covers ROCK`;
        return result;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        result = `YOU WIN. ROCK crushes SCISSORS`;
        return result;
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        result = `YOU WIN. PAPER covers ROCK`;
        return result;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        result = `You lose. SCISSORS cut PAPER`;
        return result;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        result = `You lose. ROCK crushes SCISSORS}`;
        return result;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        result = `YOU WIN. SCISSORS cut PAPER`;
        return result;
    }
}

function game() {
    const computerSelection = computerPlay();
    console.log(`Computer chose ${computerSelection}`);

    const playerSelection = (window.prompt("Select your weapon", "Rock - Paper - Scissors")).toUpperCase();
    console.log(`You selected ${playerSelection}`);
    
    playRound(playerSelection, computerSelection);
}

console.log('Happy New year');
game();



// console.log(playRound(playerSelection, computerSelection));


// const computerSelection = () => arr[Math.floor(Math.random() * arr.length)];

// function computerPlay() {
//     computerSelection = arr[Math.floor(Math.random() * arr.length)];
//     return computerSelection;
// }