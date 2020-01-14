document.getElementById("results").style.display = "none";

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
// for (var i = 0; i < 100; i++) {
//     console.log(rollDice());
// }

function playGame() {
    var startBet = document.getElementById("userStartingBet").value;

    // var startBet = document.forms["luckySevensGame"]["userStartingBet"].value;
    console.log(startBet);
    // alert(startBet);
    // document.getElementById("startingBet").innerText = startBet;
    // document.getElementById("totalRolls").innerText = startBet;
    // document.getElementById("highestMoneyWon").innerText = startBet;
    // document.getElementById("rollCount").innerText = startBet;
    // return false;

    document.getElementById("results").style.display="block";
}

function showResults() {

}

// function hideResults() {
//     document.getElementById("results").style.display = "none";
// }
