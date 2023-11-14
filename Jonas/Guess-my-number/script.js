'use strict';

let randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum);
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
       
    let check = Number(document.querySelector('.guess').value);

    if(!check){
        document.querySelector('.message').textContent = "No number🚫";
    } else if(check === randomNum){
        document.querySelector('.message').textContent = "🏅That's Correct";
        document.querySelector('.highscore').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347'
    } else if(check !== randomNum){
       if(score > 1){
        document.querySelector('.message').textContent = check > randomNum ? "📈That's too High" : "📉That's too Low";
        score--;
        document.querySelector('.score').textContent = score;
       } else {
        document.querySelector('.message').textContent = "🤦‍♂️You lost the game";
       }
    }

});

document.querySelector('.again').addEventListener('click', function() {
    randomNum = Math.floor(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.highscore').textContent = 0;
});






