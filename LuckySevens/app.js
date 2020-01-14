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
    startBet = document.getElementById("userStartingBet").value;
    bet = startBet
    console.log(bet)

    if (bet <= 0) {
        alert("Please enter starting bet greater than $0")
    }
    else {
        dice1 = rollDice();
        dice2 = rollDice();
        diceSum = dice1 + dice2;
        console.log(diceSum);
    }
    return false;
}

