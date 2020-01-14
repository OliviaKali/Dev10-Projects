function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

//global variables
var startBet;
var bet;
var dice1;
var dice2;
var diceSum;
var totalRolls= 0;
var highestWon = 0;
var rollCountHighestWon = 0;

function playGame() {
    var startBet = document.getElementById("userStartingBet").value;
    var bet = startBet
 
    // if (bet > 0) {
    //     console.log(startBet);
    // }
    if (bet <= 0) {
        alert("Please enter starting bet greater than $0")
    }
    else {
        var dice1 = rollDice();
        var dice2 = rollDice();
        var sum = dice1 + dice2;
        console.log(sum);
    }
    return false;
}

