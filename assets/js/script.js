/**document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            gameType = this.getAttribute("data-type");
            runGame(gameType);
        })
    }
});*/

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start").onclick = function () {
        startGame()
    };
});


const playerImage = document.getElementById("userChoice");
const computerImage = document.getElementById("computerChoice");
const moves = ["rock", "paper", "scissors", "spock", "lizard"];
let computerMove = moves[Math.floor(Math.random() * moves.length)];

function runGame(gameType) {
    if (gameType == "rock") {
        win = ["scissors", "lizard"];
        lose = ["spock", "paper"];
        if (win.includes(computerMove)) {
            computerWin();
        } else if (lose.includes(computerMove)) {
            playerWin();
        } else {
            draw();
        }
    }
    if (gameType == "scissors") {
        win = ["paper", "lizard"];
        lose = ["spock", "rock"];
        if (win.includes(computerMove)) {
            computerWin();
        } else if (lose.includes(computerMove)) {
            playerWin();
        } else {
            draw();
        }
    }
    if (gameType == "lizard") {
        win = ["paper", "spock"];
        lose = ["scissors", "rock"];
        if (win.includes(computerMove)) {
            computerWin();
        } else if (lose.includes(computerMove)) {
            playerWin();
        } else {
            draw();
        }
    }
    if (gameType == "paper") {
        win = ["rock", "spock"];
        lose = ["scissors", "lizard"];
        if (win.includes(computerMove)) {
            computerWin();
        } else if (lose.includes(computerMove)) {
            playerWin();
        } else {
            draw();
        }
    }
    if (gameType == "spock") {
        win = ["scissors", "rock"];
        lose = ["lizard", "paper"];
        if (win.includes(computerMove)) {
            computerWin();
        } else if (lose.includes(computerMove)) {
            playerWin();
        } else {
            draw();
        }
    }
    playerImage.src = `assets/images/${gameType}.jpg`;
    playerImage.alt = `${gameType}`;
    computerImage.src = `assets/images/${computer}.jpg`;
    computerImage.alt = `${computer}`;
    playerImage.src = `assets/images/${gameType}.jpg`;
    computerImage.src = `assets/images/${computer}.jpg`;
}

function incrementScore(gameResult) {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = oldScore++;

    /**let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = oldScore++;
    */
}

function startGame() {
    if (document.getElementById("difficulty").value === "easy") {
        document.getElementById("easy").style.display = "inline-block";
    } else {
        document.getElementById("easy").style.display = "inline-block";
        document.getElementById("difficult").style.display = "inline-block";
    }
    document.getElementById("startControls").style.display = "none";
}

function difficulty() {}

function computerWin() {}

function playerWin() {}

function draw() {}

function endGame() {}

function checkScore() {}

function draw() {}