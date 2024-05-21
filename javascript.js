
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
    return choice.toLowerCase(0)
}
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'Scissors') {
         console.log('You win! Rock beats Scissors')
    } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
         console.log('You win! Paper beats Rock')
    } else if (humanChoice == 'Scissors' && computerChoice == 'Paper'){ 
         console.log('You win! Scissors beats Paper')
    } else { console.log(`You lose!${computerChoice} beats ${humanChoice}`)
    }  
    if  (humanChoice == 'rock' && computerChoice == 'Scissors') {
         ++humanScore;
   } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        ++humanScore;
   } else if (humanChoice == 'Scissors' && computerChoice == 'Paper') { 
        ++humanScore;
   } else { ++computerScore;
   }   
   console.log(humanScore)
   console.log(computerScore)
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
const humanChoice2 = getHumanChoice();
const computerChoice2 = getComputerChoice();
const humanChoice3 = getHumanChoice();
const computerChoice3 = getComputerChoice();
const humanChoice4 = getHumanChoice();
const computerChoice4 = getComputerChoice();
const humanChoice5 = getHumanChoice();
const computerChoice5 = getComputerChoice();

function playGame() {
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





    
   

