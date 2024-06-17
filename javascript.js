const choice = ['rock', 'scissors', 'paper'];
const humanScoreDisplay = document.querySelector('#humanScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
const resultDisplay = document.querySelector('#resultDisplay');
let humanScore = 0
let computerScore = 0

/*function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)+1;
    if (choice <= 1) {
         choice = 'Rock';
    } else if (choice <= 2) {
        choice = 'Paper';
    } else  {
        choice = 'Scissors';
    }
        console.log(choice)
        return choice
}*/



/*function getHumanChoice() {
    let choice = prompt("Enter your choice please") 
    if (prompt == 'Rock') {
        console.log(choice)
    } else if (prompt == 'Paper') {
        console.log(choice)
    } else if (prompt == 'Scissors') {
        console.log(choice)
    }
    return choice.toLowerCase(0)
}*/


function playRound(humanChoice) {
    let computerChoice = choice[Math.floor(Math.random()*3)];
    let result ='';
    console.log(computerChoice);

    if(humanChoice === computerChoice){
        result = "It's a Tie!";
    } else {
        switch(humanChoice) {
            case 'rock':
               result = (computerChoice === 'scissors') ? 'You win!' : 'You lose';
                break; 
            case 'paper':
               result = (computerChoice === 'rock') ? 'You win!' : 'You lose';
                break; 
            case 'scissors':
               result = (computerChoice === 'paper') ? 'You win!' : 'You lose';
                break; 
                
        }
        
        resultDisplay.textContent = result;

        switch(result){
            case 'You win!':
                humanScore++;
                humanScoreDisplay.textContent = humanScore;
                break;
            case 'You lose':
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    break;    
        }
    }
}
/*const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
const humanChoice2 = getHumanChoice();
const computerChoice2 = getComputerChoice();
const humanChoice3 = getHumanChoice();
const computerChoice3 = getComputerChoice();
const humanChoice4 = getHumanChoice();
const computerChoice4 = getComputerChoice();
const humanChoice5 = getHumanChoice();
const computerChoice5 = getComputerChoice();*/

/* function playGame() {
    playRound(humanChoice, computerChoice)
    playRound(humanChoice2, computerChoice2)
    playRound(humanChoice3, computerChoice3)
    playRound(humanChoice4, computerChoice4)
    playRound(humanChoice5, computerChoice5)
    if (humanScore > computerScore) {
        console.log('You win!')
    } else console.log('You lose!')
}
playGame();
 */




    
   

