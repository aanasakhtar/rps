function getComputerChoice(choices) {
    let rand_id = Math.floor(Math.random() * choices.length);
    return choices[rand_id];
}

const buttons = document.querySelectorAll("button");
const user = document.querySelector(".user-choice");
const comp = document.querySelector(".computer-choice");
const userTextRef = document.querySelector(".user-text");
const compTextRef = document.querySelector(".comp-text");

const choices = ["Rock", "Paper", "Scissors"];
let compScore = 0;
let userScore = 0;
let round = 0;
const totalRounds = 5;

function pointTheGame(compChoice, userChoice) {
    if (compChoice === userChoice) {
        console.log("No point for anyone");
    }
    else if (
        (compChoice === "Rock" && userChoice === "Paper") ||
        (compChoice === "Paper" && userChoice === "Scissors") ||
        (compChoice === "Scissors" && userChoice === "Rock")
    ) {
        console.log("Point for User!");
        userScore += 1;
    }
    else {
        console.log("Point for Computer!");
        compScore += 1;
    }

    user.textContent = `Your choice: ${userChoice}`;
    comp.textContent = `Computer choice: ${compChoice}`;

    userTextRef.textContent = `Player's score: ${userScore}`;
    compTextRef.textContent = `Computer's Score: ${compScore}`;
}

function playTheGame() {
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const userChoice = event.target.textContent;
            const compChoice = getComputerChoice(choices);

            pointTheGame(compChoice, userChoice);
            round++;

            if (round >= totalRounds) {
                if (userScore == compScore) {
                    alert("That's a draw, play one more!");
                    round = totalRounds - 1;
                }
                else {
                    if (userScore > compScore) {
                        alert("You won!");
                    }
                    else {
                        alert("Sorry you lost");
                    }
    
                    userScore = 0;
                    compScore = 0;
                    round = 0;
                }
            }
        });
    });
}

playTheGame();
