var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);

var h1Changer = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    h1Changer.innerHTML = "Player 1 Wins";
}
else if (randomNumber2 > randomNumber1){
  h1Changer.innerHTML = "Player 2 Wins";
}
else{
  h1Changer.innerHTML = "Draw";
}
