function getComputerChoice(choices) {
    let rand_id = Math.floor(Math.random() * choices.length);
    return choices[rand_id]
}
function getUserChoice() {
    user_input = prompt("Hi, write 'r' for Rock, 'p' for paper, and 's' for scissors:");
    while (user_input != "r" && user_input != "p" && user_input != "s") {
        user_input = prompt("Please enter right letter for your choice. Write 'r' for Rock, 'p' for paper, and 's' for scissors:");
    }
    if (user_input === "r") {
        return "rock"
    }
    else if (user_input === "p") {
        return "paper"
    }
    else {
        return "scissors"
    }
}
const choices = ["rock", "paper", "scissors"];
let compScore = 0;
let userScore = 0;
let round = 0

function pointTheGame(compChoice, userChoice) {
    if (compChoice == userChoice) {
        console.log("No point for anyone");
    }
    else if (compChoice == "rock" && userChoice == "paper") {
        console.log("Point for User!");
        userScore += 1;
    }
    else if (compChoice == "rock" && userChoice == "scissors") {
        console.log("Point for Computer!");
        compScore += 1;
    }
    else if (compChoice == "paper" && userChoice == "scissors") {
        console.log("Point for User!");
        userScore += 1;
    }
    else if (compChoice == "paper" && userChoice == "rock") {
        console.log("Point for Computer!");
        compScore += 1;
    }
    else if (compChoice == "scissors" && userChoice == "rock") {
        console.log("Point for User!");
        userScore += 1;
    }
    else if (compChoice == "scissors" && userChoice == "paper") {
        console.log("Point for Computer!");
        compScore += 1;
    }
}

function playTheGame(gamerounds = 3) {
    while (round < gamerounds || userScore == compScore) {
        let compChoice = getComputerChoice(choices);
        let userChoice = getUserChoice();
        pointTheGame(compChoice, userChoice);
        round++
    }
    if (userScore > compScore) {
        alert("You won!")
    }
    else {
        alert("Sorry you lost")
    }
}
playTheGame()