//Welcome message
console.log("Welcome to stone Paper Scissors")
//stone Paper Scissors

//declare humanChoice, computerChoice,humanScore,computerScore in global scope
let humanChoice = ''
let computerChoice = ''
let computerScore = 0
let humanScore = 0

//getHumanChoice
function getHumanChoice(){
    humanChoice = prompt('Please choose between stone, paper,scissors')
    humanChoice = humanChoice.toLowerCase()
    return humanChoice
}


//getComputerChoice
function getComputerChoice() {
    //initialising randomNum and computerChoice
    let randomNum = 0
    let computerChoice = ""

    randomNum = Math.random(0,1)
    
    //Logic to convert randomNum to an output of stone paper scissors
    if (randomNum <= 1/3) {
        computerChoice = 'stone'
    }    
    else if (randomNum <= 2/3) {
        computerChoice = 'scissors'
    }
    else if (randomNum <= 1) {
        computerChoice = 'paper'
    }
    return computerChoice
}

//Function to get all choices
function getChoices(){
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    console.log("Human:" , humanChoice)
    console.log("Computer:",computerChoice)
}

////playRound(humanChoice,computerChoice)
    // winner()
    //increment scores based on winner

function playRound(humanChoice,computerChoice) {
    let winner = ''
    if (humanChoice === computerChoice){
        console.log("Thats a draw")
        winner = 'draw'
    }

    else if (humanChoice === "stone"){
        if (computerChoice === "paper"){
            console.log("You lose! Paper beats Stone")
            computerScore ++
            winner = "computer"
        }
        else if (computerChoice === 'scissors'){
            console.log("You Win! Stone beats Scissors")
            humanChoice = humanScore ++  
            winner = "human"          
        }

    }
    else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            console.log("You lose! scissors beats paper")
            computerScore ++
            winner = "computer"
        }
        else if (computerChoice === 'stone'){
            console.log("You Win! paper beats stone")
            humanChoice = humanScore ++ 
            winner = "human"           
        }
    }
        else if (humanChoice === "scissors"){
            if (computerChoice === "stone"){
                console.log("You lose! stone beats scissors")
                computerScore ++
                winner = "computer"
            }
            else if (computerChoice === 'paper'){
                console.log("You Win! scissors beats paper")
                humanChoice = humanScore ++ 
                winner = "human"           
            }
        }
    return winner
}    

// playGame Calls playRound 5 times
function playGame(){
    getChoices()
    playRound(humanChoice=humanChoice,computerChoice=computerChoice)
    getChoices()
    playRound(humanChoice=humanChoice,computerChoice=computerChoice)
    getChoices()
    playRound(humanChoice=humanChoice,computerChoice=computerChoice)
    getChoices()
    playRound(humanChoice=humanChoice,computerChoice=computerChoice)
    getChoices()
    playRound(humanChoice=humanChoice,computerChoice=computerChoice)
}

playGame()
console.log('Human:',humanScore,'Computer:',computerScore)