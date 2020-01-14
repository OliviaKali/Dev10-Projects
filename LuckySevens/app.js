function playGame() {
    // var startBet = Number(document.forms["luckySevensGame"]["startingBet"].value);
    // console.log(startBet)
    var startBet = document.forms["luckySevensGame"]["userStartingBet"].value;
    console.log(startBet);
    document.getElementById("startingBet").innerText = startBet
}

