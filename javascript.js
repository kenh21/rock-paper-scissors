const choice = ['rock', 'scissors', 'paper'];
const humanScoreDisplay = document.querySelector('#humanScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
const resultDisplay = document.querySelector('#resultDisplay');
let humanScore = 0
let computerScore = 0



function playRound(humanChoice) {
    let computerChoice = choice[Math.floor(Math.random()*3)];
    let result ='';

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
    resultDisplay.textContent = result;
}





    
   

