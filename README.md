Here is the plan:
    it's in OneNote
30Dec:
    figured out that the lines in js script need to be sequenced correctly for the if statements to work correctly in function playRound
31Dec: 
    added return statements for all 6 possible outcomes of plays
        Thought of combining the 'returns' using template literals a/w consts for player and computer but chose to use 6 returns instead. This allows me to use specific words like 'cuts' and 'crushes' instead of simply 'beats' x 6,
    shortened function playRound; 
        removed repeated returns, replaced with one line at bottom of function :)
    could not find a suitable way to prevent window.prompt from blocking html displaying the page
    
    Hmmm: Might have to move the player and computer choices to a separate function!! 
        AND include it in game(), above playGame.::: NO- did not work.
        also have to figure a way for the func to return TWO values
    SOLUTION: player and computer choices now at top of loop within game() [No function] AND IT WORKS!!
        Must figure out why the func getChoices() did not work inside game()
        // function getChoices() {
        //     let computerSelection = computerPlay();
        //     console.log(`Computer chose ${computerSelection}`);
        //     let playerSelection = (window.prompt("Select your weapon", "Rock - Paper - Scissors")).toUpperCase();
        //     console.log(`You selected ${playerSelection}`);
        //     return {playerSelection, computerSelection};
        // }
1 Jan:
    js file is messed up. Must pull last version from repo.
