// document.getElementById("results").style.display = "none";

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
// for (var i = 0; i < 100; i++) {
//     console.log(rollDice());
// }

function playGame() {
    var startBet = document.getElementById("userStartingBet").value;
    // var startBet = document.getElementById("userStartingBet");

    // var startBet = document.forms["luckySevensGame"]["userStartingBet"].value;
    
    if (startBet > 0) {
        console.log(startBet);
    }
    // alert(startBet);
    // document.getElementById("startingBet").innerText = startBet;
    // document.getElementById("totalRolls").innerText = startBet;
    // document.getElementById("highestMoneyWon").innerText = startBet;
    // document.getElementById("rollCount").innerText = startBet;
    return false;

    // document.getElementById("results").innerText("<h1>Results</h1>")

    // document.getElementById("results").style.display="block";
}

