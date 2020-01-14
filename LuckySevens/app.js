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
       while (bet > 0) {
        dice1 = rollDice();
        dice2 = rollDice();
        diceSum = dice1 + dice2;
        console.log(diceSum);
       }
        if (diceSum == 7) {
            bet +=4
            console.log("equal")
        } 
        else {
            bet--
            console.log("not equal") 
            // if (bet > )
        }
    }
    document.getElementById("results").style.display ="block";
    // document.getElementsById("playButton").innerText ="Play Again";
    // document.getElementsById("startingBet").innerHTML = bet;
    return false;
}

// var startBet = document.getElementById('userStartingBet');
// var bet;
// var dice1;
// var dice2;
// var diceSum;
// var totalRolls= 0;
// var highestWon = 0;
// var rollCountHighestWon = 0;

// function playGame() {
//     document.getElementById("results").style.display ="block";
// }