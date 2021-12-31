console.log('Happy New year');

const arr = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
    result = "";
    if (playerSelection == computerSelection) {
        result = 'TIE GAME';
        return result;
    } else {
        result = 'Somebody won and someone else lost';
        return result;
    }
}
// const computerSelection = () => arr[Math.floor(Math.random() * arr.length)];
const computerSelection = computerPlay();
console.log(`Computer chose ${computerSelection}`);

const playerSelection = (window.prompt("Select your weapon", "Rock - Paper - Scissors")).toUpperCase();
console.log(`You selected ${playerSelection}`);

console.log(playRound(playerSelection, computerSelection));




// function computerPlay() {
//     computerSelection = arr[Math.floor(Math.random() * arr.length)];
//     return computerSelection;
// }