document.addEventListener("DOMContentLoaded", function(){
    let buttons=document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            gameType=this.getAttribute("data-type");
                runGame(gameType);
            }
        )
    }
});

function runGame(gameType){
    let moves=["rock","paper","scissors","spock","lizard"];
    let computer = moves[Math.floor(Math.random() * moves.length)];
    if(gameType="rock")
    alert(`You are playing ${gameType} and computer choose ${computer}`);
}



