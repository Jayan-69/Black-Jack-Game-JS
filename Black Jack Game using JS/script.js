function main() {
    let confirm = document.getElementById("mainResult").innerHTML;
    if (confirm == "You Lost!!"){
        alert("Game Over!! Please Restart to Play Again")
    }
    else{
    let x
    do {
    x = Math.floor(Math.random() * 100 / 7.6);
    } while(x == 0);

    let currentTot = parseInt(document.getElementById("result").innerHTML);
    let tot = currentTot + x;
    document.getElementById("result").innerHTML = tot;

    if (tot < 21) {
        document.getElementById("mainResult").innerHTML = "Generate Another Card";
    } 
    else if (tot == 21) {
        document.getElementById("mainResult").innerHTML = "You Won!!";
        alert("Congratulations!!");
        document.getElementById("btnRes").style.display = "block";
    }
    else if (tot > 21) {
        document.getElementById("mainResult").innerHTML = "You Lost!!";
        alert("Lost!! Click Restart to Play Again");
        document.getElementById("btnRes").style.display = "block";
    }

    var img = document.createElement("img");
    img.src = "Pics/" + x + ".png";
    img.height = 200;

    document.body.appendChild(img);
    }
}

function restart(){
    location.reload();
}
