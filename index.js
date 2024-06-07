//for first dice
var randomNumber1 = Math.floor(Math.random()*6) +1 ;
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

//for second dice

var randomNumber2= Math.floor(Math.random() *6 )+ 1;
var randomDiceImage2 = "./images/dice" + randomNumber2 +".png" ;
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if (randomNumber1 > randomNumber2 )
    {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Won";
    }
    else if (randomNumber2 > randomNumber1 )
    {
        document.querySelector("h1").innerHTML = "🚩 Player 2 Won";
    }
    else
    {
        document.querySelector("h1").innerHTML = "Draw !";
    }
    