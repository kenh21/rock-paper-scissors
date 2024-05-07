
function getComputerChoice() {
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
}



function getHumanChoice() {
    let choice = prompt("Enter your choice please") 
    if (prompt == 'Rock') {
        console.log(choice)
    } else if (prompt == 'Paper') {
        console.log(choice)
    } else if (prompt == 'Scissors') {
        console.log(choice)
    }
    return choice.toLowerCase()
}


function playRound(humanChoice, computerChoice) {
     if (humanChoice == 'rock' && computerChoice == 'Scissors') {
        return console.log('You win! Rock beats Scissors')
    } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        return console.log('You win! Paper beats Rock')
    } else if (humanChoice == 'Scissors' && computerChoice == 'Paper'){ 
        return console.log('You win! Scissors beats Paper')
    } else { return console.log(`You lose!${computerChoice} beats ${humanChoice}`)
    }    
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);


const humanScore = 0
const computerScore = 0