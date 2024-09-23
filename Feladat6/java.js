function Fight(){
    let p1 = document.getElementById("player1").value;
    let p2 = document.getElementById("player2").value;

    if (p1 == p2){
        document.getElementById("Result").innerHTML = "The game is tie.";
    }
    else if((p1 == 1 && p2 == 3) || (p1 == 2 && p2 == 1) || (p1 == 3 && p2 == 2)){
        document.getElementById("Result").innerHTML = "The first player wins.";
    }
    else if((p2 == 1 && p1 == 3) || (p2 == 2 && p1 == 1) || (p2 == 3 && p1 == 2)){
        document.getElementById("Result").innerHTML = "The second player wins.";
    }
    else{
        document.getElementById("Result").innerHTML = "Something went wrong.";
    }
}