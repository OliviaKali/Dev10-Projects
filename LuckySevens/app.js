function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    var startBet;
    var bet;
    var dice1;
    var dice2;
    var diceSum;
    var totalRolls = 0;
    var highestWon = 0;
    var rollCountHighestWon = 0;

    startBet = document.getElementById("userStartingBet").value;
    bet = startBet
    console.log(bet)

    if (bet <= 0) {
        alert("Please enter starting bet that is greater than $0")
    }
    else {
        while (bet > 0) {
            dice1 = rollDice();
            dice2 = rollDice();
            diceSum = dice1 + dice2;
            totalRolls++;

            console.log(diceSum);
            console.log(totalRolls);

            if (diceSum != 7) {
                bet -= 1
            }
            else {
                bet += 4
                if (bet > highestWon) {
                    highestWon = bet
                    rollCountHighestWon = totalRolls;
                }
            }
        }
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("playButton").textContent = "Play Again";
    document.getElementById("startingBet").innerHTML = "$" + startBet + ".00";
    document.getElementById("totalRolls").innerHTML = totalRolls;
    document.getElementById("highestMoneyWon").innerHTML = "$" + highestWon + ".00"
    document.getElementById("rollCount").innerHTML = rollCountHighestWon
    return false;
}
