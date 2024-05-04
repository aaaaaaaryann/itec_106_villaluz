const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const compScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let compScore = 0;
function playGame(playerChoice){
    const compChoice =  choices[Math.floor(Math.random()*3)];
    console.log(compChoice);
    let result = "";
    if(playerChoice === compChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (compChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            
                case "paper":
                result = (compChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            
                case "scissors":
                result = (compChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    playerDisplay.innerHTML = `<span class="thin">you picked:</span> ${playerChoice}`;
    computerDisplay.innerHTML = `<span class="thin">computer picked:</span> ${compChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            compScore++;
            compScoreDisplay.textContent = compScore;
            break;
    }
}