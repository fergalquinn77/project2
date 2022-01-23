document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            gameType = this.getAttribute("data-type");
            runGame(gameType);
        })
    }
    document.getElementById("start").onclick = startGame;
    document.getElementById("reset").onclick = gameReset;
});


function runGame(gameType) {

    const moves = ["rock", "paper", "scissors", "spock", "lizard"];
    let computerMove = moves[Math.floor(Math.random() * moves.length)];
    console.log(gameType);
    console.log(computerMove);
    if (gameType == "rock") {
        win = ["scissors", "lizard"];
        lose = ["spock", "paper"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            draw();
        }
        updateImage(gameType, computerMove);
    }
    if (gameType == "scissors") {
        win = ["paper", "lizard"];
        lose = ["spock", "rock"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            incrementScore("draw");
        }
        updateImage(gameType, computerMove);
    }
    if (gameType == "lizard") {
        win = ["paper", "spock"];
        lose = ["scissors", "rock"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            draw();
        }
        updateImage(gameType, computerMove);
    }
    if (gameType == "paper") {
        win = ["rock", "spock"];
        lose = ["scissors", "lizard"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            draw();
        }
        updateImage(gameType, computerMove);
    }
    if (gameType == "spock") {
        win = ["scissors", "rock"];
        lose = ["lizard", "paper"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            draw();
        }
        updateImage(gameType, computerMove);
    }

}

function incrementScore(gameResult) {
    console.log(gameResult);
    if (gameResult === "user") {
        let userOldScore = parseInt(document.getElementById('userScore').innerText);
        document.getElementById('userScore').innerText = ++userOldScore;
        console.log("win");
    } else if (gameResult === "computer") {
        let compOldScore = parseInt(document.getElementById('computerScore').innerText);
        document.getElementById('computerScore').innerText = ++compOldScore;
        console.log("loose");
    } else {

    }
    let userNewScore = document.getElementById('userScore').innerText;
    let compNewScore = document.getElementById('computerScore').innerText;
    checkScore(userNewScore, compNewScore);
}

function startGame() {
    if (document.getElementById("difficulty").value === "easy") {
        document.getElementById("easy").style.display = "inline-flex";
    } else {
        document.getElementById("easy").style.display = "inline-flex";
        document.getElementById("difficult").style.display = "inline-flex";
    }
    document.getElementById("startControls").style.display = "none";
    document.getElementById("choices").style.display = "inline-flex";
}

function draw() {}

function endGame() {}

function checkScore(userScore, compScore) {
    let finish = document.getElementById("numberGames").value;
    if (finish == userScore || finish == compScore) {
        console.log("finish")
    }
}

function updateImage(userInp, compInp) {
    let userImage = document.getElementById("userChoice");
    let computerImage = document.getElementById("computerChoice");
    userImage.src = `assets/images/${userInp}.jpg`;
    userImage.alt = `${userInp}`;
    computerImage.src = `assets/images/${compInp}.jpg`;
    computerImage.alt = `${compInp}`;
}

function gameReset() {
    let userImage = document.getElementById("userChoice");
    let computerImage = document.getElementById("computerChoice");
    userImage.src = 'assets/images/thumbs.jpg';
    userImage.alt = 'user image';
    computerImage.src = 'assets/images/computer.jpg';
    computerImage.alt = 'computer image';
    startGame();
    document.getElementById('computerScore').innerText = 0;
    document.getElementById('userScore').innerText = 0;

}