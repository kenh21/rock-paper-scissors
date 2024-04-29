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
}
getComputerChoice()

//user gets prompt 
//user inputs 1 of 3 choices (rock, paper, or scissors)

function getHumanChoice() {
    let choice = prompt("Enter your choice quickly please!") 
    if (prompt = 'Rock') {
        console.log(choice)
    } else if (prompt = 'Paper') {
        console.log(choice)
    } else if (prompt = 'Scissors') {
        console.log(choice)
    }
    
}
getHumanChoice()