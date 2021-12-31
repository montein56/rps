console.log('Happy New year');

let arr = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    computerSelection = arr[Math.floor(Math.random() * arr.length)];
    return computerSelection;
}
