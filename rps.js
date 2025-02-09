function getComputerChoice(){
    let cpunum = Math.random();
    if (cpunum > 0 && cpunum < (1/3)){
        cpuchoice = "rock"
    } else if (cpunum > (1/3) && cpunum< (2/3)){
        cpuchoice="paper"
    } else cpuchoice="scissors";

    return cpuchoice;  
}

function getHumanChoice(){
    let userprompt = prompt("Please enter 'rock','paper', or 'scissors'.");
    userprompt = userprompt.toLowerCase();
    if (userprompt === "rock"){
        userchoice = "rock"
    } else if (userprompt ==="paper"){
        userchoice = "paper"
    } else userchoice = "scissors";
    return userchoice;
}


function playGame(){ 
    let humanScore = 0; 
    let computerScore = 0;    
    function playRound(userchoice,cpuhoice){
            if (userchoice==="rock" && cpuchoice==="rock"){
                console.log("Computer chose: rock")
                console.log("You chose: rock")
                console.log("It's a tie! You both selected rock.")
            } else if (userchoice==="rock" && cpuchoice==="paper"){
                console.log("Computer chose: paper")
                console.log("You chose: rock")
                console.log("You lose! Paper beats rock.")
                computerScore=+1
            } else if (userchoice==="rock" && cpuchoice==="scissors"){
                console.log("Computer chose: scissors")
                console.log("You chose: rock")
                console.log("You win! Rock beats scissors.")
                humanScore=+1
            } else if (userchoice==="paper" && cpuchoice==="rock"){
                console.log("Computer chose: rock")
                console.log("You chose: paper")
                console.log("You win! Paper beats rock.")
                humanScore=+1
            } else if (userchoice==="paper" && cpuchoice==="paper"){
                console.log("Computer chose: paper")
                console.log("You chose: paper")
                console.log("It's a tie! You both selected paper.")
            } else if (userchoice==="paper" && cpuchoice==="scissors"){
                console.log("Computer chose: scissors")
                console.log("You chose: paper")
                console.log("You lose! Scissors beats paper.")
                computerScore=+1
            } else if (userchoice==="scissors" && cpuchoice==="rock"){
                console.log("Computer chose: rock")
                console.log("you chose: scissors")
                console.log("You lose! Rock beats scissors.")
                computerScore=+1
            } else if (userchoice==="scissors" && cpuchoice==="paper"){
                console.log("Computer chose: paper")
                console.log("You chose: scissors")
                console.log("You win! Scissors beats paper.")
                humanScore=+1
            } else if (userchoice==="scissors" && cpuchoice==="scissors"){
                console.log("Computer chose: scissors")
                console.log("You chose: scissors")
                console.log("It's a tie! You both selected scissors.")
            }
        
    }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection,computerSelection);
        console.log("The score is computer: "+computerScore+ " you: "+humanScore);
        return computerScore;
        return humanScore;
}

round = 0;
while (round < 5){
    playGame();
    round++;
}

console.log("The total score is computer: "+computerScore+ " Your score: "+humanScore);