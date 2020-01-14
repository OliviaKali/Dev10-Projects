function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    var startBet = document.getElementById("userStartingBet").value;
 
    
    if (startBet > 0) {
        console.log(startBet);
    }

    return false;

}

