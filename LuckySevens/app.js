function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
// for (var i = 0; i < 100; i++) {
//     console.log(rollDice());
// }

function playGame() {
    // var startBet = Number(document.forms["luckySevensGame"]["startingBet"].value);
    // console.log(startBet)
    var startBet = document.forms["luckySevensGame"]["userStartingBet"].value;
    console.log(startBet);
    // document.getElementById("startingBet").innerText = startBet
}

