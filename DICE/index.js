let images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

let randomNumber1 = Math.round(Math.random() * 5);
let selectedImage1 = images[randomNumber1];
let playerDice1 = document.querySelector(".img1");
playerDice1.setAttribute("src", images[randomNumber1]);

let randomNumber2 = Math.round(Math.random() * 5);
let selectedImage2 = images[randomNumber2];
let playerDice2 = document.querySelector(".img2");
playerDice2.setAttribute("src", images[randomNumber2]);

let message = "";
if (randomNumber1 === randomNumber2) message = "Draw";
else if (randomNumber1 > randomNumber2) message = "Player 1 Wins!";
else message = "Player 2 Wins!";

let h1 = (document.querySelector("h1").innerHTML = message);
