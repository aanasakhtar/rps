function getComputerChoice(choices) {
    let rand_id = Math.floor(Math.random() * choices.length);
    return choices[rand_id]
}

const buttons = document.querySelectorAll("button");
const user = document.querySelector(".user-choice");
const comp = document.querySelector(".computer-choice");
const userTextRef = document.querySelector(".user-text");
const compTextRef = document.querySelector(".comp-text");

function getUserChoice(event) {
    const btnText = event.target.textContent;
    return btnText;
}

const choices = ["Rock", "Paper", "Scissors"];
let compScore = 0;
let userScore = 0;
let round = 0;



function pointTheGame(compChoice, userChoice) {
    if (compChoice == userChoice) {
        console.log("No point for anyone");
    }
    else if (compChoice == "Rock" && userChoice == "Paper") {
        console.log("Point for User!");
        userScore += 1;
    }
    else if (compChoice == "Rock" && userChoice == "Scissors") {
        console.log("Point for Computer!");
        compScore += 1;
    }
    else if (compChoice == "Paper" && userChoice == "Scissors") {
        console.log("Point for User!");
        userScore += 1;
    }
    else if (compChoice == "Paper" && userChoice == "Rock") {
        console.log("Point for Computer!");
        compScore += 1;
    }
    else if (compChoice == "Scissors" && userChoice == "Rock") {
        console.log("Point for User!");
        userScore += 1;
    }
    else if (compChoice == "Scissors" && userChoice == "Paper") {
        console.log("Point for Computer!");
        compScore += 1;
    }
    
    user.textContent = `Your choice: ${userChoice}`;
    comp.textContent = `Computer choice: ${compChoice}`;
    
    userTextRef.textContent = `Player's score: ${userScore}`;
    compTextRef.textContent = `Computer's Score: ${compScore}`;
}

function playTheGame(gamerounds = 5) {
    while (round < gamerounds || userScore == compScore) {
        let userChoice;       
        buttons.forEach(button => {
            button.addEventListener('click', () => {userChoice = getUserChoice(event)});
        });
        let compChoice = getComputerChoice(choices);
        
        pointTheGame(compChoice, userChoice);

        round++;
    }
    if (userScore > compScore) {
        alert("You won!")
    }
    else {
        alert("Sorry you lost")
    }    
}

playTheGame();