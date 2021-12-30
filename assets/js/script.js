document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            gameType = this.getAttribute("data-type");
            runGame(gameType);
        })
    }
});

const playerImage = document.getElementById("userChoice");
const computerImage = document.getElementById("computerChoice");

function runGame(gameType) {
    let moves = ["rock", "paper", "scissors", "spock", "lizard"];
    let computer = moves[Math.floor(Math.random() * moves.length)];
    if (gameType == "rock") {
        win = ["scissors", "lizard"];
        lose = ["spock", "paper"];
        if (win.includes(computer)) {
            alert(`You choose ${gameType} and computer choose ${computer}. You win!`);
            incrementScore();
        } else if (lose.includes(computer)) {
            alert(`You choose ${gameType} and computer choose ${computer}. You lose!`);
            incrementWrongAnswer();
        } else {
            alert(`You choose ${gameType} and computer choose ${computer}. It's a draw!`)
        }
        
    }
    if (gameType == "scissors") {
        win = ["paper", "lizard"];
        lose = ["spock", "rock"];
        if (win.includes(computer)) {
            alert(`You choose ${gameType} and computer choose ${computer}. You win!`);
            incrementScore();
        } else if (lose.includes(computer)) {
            alert(`You choose ${gameType} and computer choose ${computer}. You lose!`);
            incrementWrongAnswer();
        } else {
            alert(`You choose ${gameType} and computer choose ${computer}. It's a draw!`)
        }
    }
    if (gameType == "lizard") {
        win = ["paper", "spock"];
        lose = ["scissors", "rock"];
        if (win.includes(computer)) {
            alert(`You choose ${gameType} and computer choose ${computer}. You win!`);
            incrementScore();
        } else if (lose.includes(computer)) {
            alert(`You choose ${gameType} and computer choose ${computer}. You lose!`);
            incrementWrongAnswer();
        } else {
            alert(`You choose ${gameType} and computer choose ${computer}. It's a draw!`)
        }
    }
    if (gameType == "paper") {
        win = ["rock", "spock"];
        lose = ["scissors", "lizard"];
        if (win.includes(computer)) {
            alert(`You choose ${gameType} and computer choose ${computer}. You win!`);
            incrementScore();
        } else if (lose.includes(computer)) {
            alert(`You choose ${gameType} and computer choose ${computer}. You lose!`);
            incrementWrongAnswer();
        } else {
            alert(`You choose ${gameType} and computer choose ${computer}. It's a draw!`)
        }
    }
    if (gameType == "spock") {
        win = ["scissors", "rock"];
        lose = ["lizard", "paper"];
        if (win.includes(computer)) {
            alert(`You choose ${gameType} and computer choose ${computer}. You win!`);
            incrementScore();
        } else if (lose.includes(computer)) {
            alert(`You choose ${gameType} and computer choose ${computer}. You lose!`);
            incrementWrongAnswer();
        } else {
            alert(`You choose ${gameType} and computer choose ${computer}. It's a draw!`)
        }
    }
    playerImage.src = `assets/images/${gameType}.jpg`
    playerImage.alt = `${gameType}`;
    computerImage.src = `assets/images/${computer}.jpg`;
    computerImage.alt = `${computer}`;
    playerImage.src = `assets/images/${gameType}.jpg`;
    computerImage.src = `assets/images/${computer}.jpg`;
}

function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * Gets the incorrect score from the DOM and increments it by 1
 */

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;

}