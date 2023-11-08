//Dice 1
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomImages = "dice" + randomNumber1 + ".png";
let randomImagesSource = "images/" + randomImages;
let images1 = document.getElementById("images1");
images1.src = randomImagesSource;

//Dice 2

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomImages2 = "dice" + randomNumber2 + ".png";
let randomImagesSource2 = "images/" + randomImages2;
let images2 = document.getElementById("images2");
images2.src = randomImagesSource2;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Won🤩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Won😶‍🌫️";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Match Tied😒";
}
