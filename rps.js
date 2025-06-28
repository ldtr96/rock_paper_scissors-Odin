function getComputerChoice(){
    let cpunum = Math.random();
    if (cpunum > 0 && cpunum < (1/3)){
        cpuchoice = "rock"
    } else if (cpunum > (1/3) && cpunum< (2/3)){
        cpuchoice="paper"
    } else cpuchoice="scissors";

    return cpuchoice;  
}

let humanScore = 0; 
let computerScore = 0;
choicerock = document.querySelector("#rock");
choicepaper = document.querySelector("#paper");
choicescissors = document.querySelector("#scissors");

btn = document.querySelectorAll("button")
btn.forEach(btn => {
  btn.addEventListener("click", function(event){
    userchoice = event.target.id;
    function getHumanChoice(){
        return userchoice;
                }     
                function playRound(userchoice,cpuchoice){
            if (userchoice==="rock" && cpuchoice==="rock"){
                console.log("It's a tie! You both selected rock.")
            } else if (userchoice==="rock" && cpuchoice==="paper"){
                console.log("Round lost! Paper beats rock.")
                computerScore+=1
            } else if (userchoice==="rock" && cpuchoice==="scissors"){
                console.log("Round won! Rock beats scissors.")
                humanScore+=1
            } else if (userchoice==="paper" && cpuchoice==="rock"){
                console.log("Round won! Paper beats rock.")
                humanScore+=1
            } else if (userchoice==="paper" && cpuchoice==="paper"){
                console.log("It's a tie! You both selected paper.")
            } else if (userchoice==="paper" && cpuchoice==="scissors"){
                console.log("Round lost! Scissors beats paper.")
                computerScore+=1
            } else if (userchoice==="scissors" && cpuchoice==="rock"){
                console.log("Round lost! Rock beats scissors.")
                computerScore+=1
            } else if (userchoice==="scissors" && cpuchoice==="paper"){
                console.log("Round won! Scissors beats paper.")
                humanScore+=1
            } else if (userchoice==="scissors" && cpuchoice==="scissors"){
                console.log("It's a tie! You both selected scissors.")
            }

                }
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();
                playRound(humanSelection,computerSelection);
                roundScore = "The score is computer: "+computerScore+ " you: "+humanScore;
                roundchoices = "Computer chose: " + cpuchoice + "." + "You chose: " + userchoice + ".";
                
                newcreatediv = document.createElement("div");
                newcreatediv.setAttribute("id", "result-div");
                
                
                scorediv = document.createElement("div");
                scorediv.setAttribute("id", "score-div");
                scorediv.textContent = roundScore;

                choicesdiv = document.createElement("div");
                choicesdiv.setAttribute("id", "choices-div");
                choicesdiv.textContent = roundchoices;

                newcreatediv.appendChild(choicesdiv);
                newcreatediv.appendChild(scorediv);

                resultsParent = document.querySelector("#results-window")
                
                oldcreatediv = document.querySelector("#result-div")

                if (oldcreatediv == null){
                    resultsParent.appendChild(newcreatediv);
                }

                else {
                    oldcreatediv.replaceWith(newcreatediv);
                    resultsParent.appendChild(newcreatediv);
                }

                if (humanScore == 5){
                    scorediv.textContent = "You're a winner and all you do is win!"
                    humanScore = 0
                    computerScore = 0
                    window.open("https://www.youtube.com/watch?v=GGXzlRoNtHU&list=RDGGXzlRoNtHU&start_radio=1");
                }
                
                else if (computerScore ==5){
                    scorediv.textContent ="You lost?!? What a loser..."
                    humanScore = 0
                    computerScore = 0
                    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1");
                }

            }
        )  
    }
);





//The below is outside of functions. Comment out to avoid the script automatically running for now.

/*
if (humanScore > computerScore){
    console.log("You won!!! The total score is computer: "+computerScore+ " Your score: "+humanScore)
}else if (humanScore < computerScore){
    console.log("You lost!!! The total score is computer: "+computerScore+ " Your score: "+humanScore)
} else {
    console.log("It's a tie!!! The total score is computer: "+computerScore+ " Your score: "+humanScore)
};*/