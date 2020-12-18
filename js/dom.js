function backgroundButton(dice){
    var dice = Math.round(6*Math.random());
    if (dice === 1){
        document.body.style.backgroundColor = "#ff4646";
    } else if (dice === 2){
        document.body.style.backgroundColor = "light-blue";
    } else if (dice === 3){
        document.body.style.backgroundColor = "#61b15a";
    } else if (dice === 4){
        document.body.style.backgroundColor = "#4e8d7c";
    } else if (dice === 5){
        document.body.style.backgroundColor = "yellow";
    } else if (dice === 6){
        document.body.style.backgroundColor = "cyan";
    }
    console.log(dice);
}


