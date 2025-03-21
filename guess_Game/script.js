'use strict';
let secretNumber = Math.trunc(Math.random()* 21);
   console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function 
    change(){
    let score = Number(document.querySelector('.score').innerText) ;
    const number = Number(document.getElementById('get').value);
    if (document.getElementById('get').value.trim() === ""){
        alert('🔢 Enter Number!');
        document.querySelector('.score').value = 10;
    }
    else if (number<=20 && number>=0){
        document.querySelector('body').style.backgroundColor = '#222';
    }
    if (number > 20 || number < 0){
        document.querySelector('.message').innerText = '⛔ Invalid input ';
        document.querySelector('body').style.backgroundColor = '#f00';
    }
    else if (number === secretNumber){
        document.querySelector('.gross').innerText = secretNumber;
        document.querySelector('.message').innerText = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#0f0';
        document.querySelector('.gross').style.width = '5.75em';
        document.querySelector('.gross').style.border = '3px solid #000';
        high(score);
        function high(score){
            if (score > Number(document.querySelector('.highscore').innerText)){
                document.querySelector('.highscore').innerText = score;
            }
        }
        document.querySelector('#get').disabled = true;
        document.querySelector('.check').disabled= true;
    }
    else if (number > secretNumber){
        document.querySelector('.message').innerText = '📈 To high ';
        document.querySelector('.score').innerText = --score;
    }
    else {
        document.querySelector('.message').innerText = '📉 To low ';
        document.querySelector('.score').innerText = --score;
    }
    if (score === 0){
        document.querySelector('.message').innerText = '😖 You lose ';
        document.querySelector('#get').disabled = true;
        document.querySelector('.check').disabled= true;
        document.querySelector('.reload').style.display = 'block';
    }
    });
    document.querySelector('.again').addEventListener('click', function 
        restart(){
        secretNumber = Math.trunc(Math.random()* 21);
        document.querySelector('#get').disabled = false;
        document.querySelector('.check').disabled= false; 
        document.querySelector('.gross').innerText = '?';
        document.querySelector('.message').innerText = 'Start guessing...';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.gross').style.width = '100px';
        document.querySelector('.gross').style.border = 'none';
        document.querySelector('.score').innerText = 10;
        document.getElementById('get').value = null; 
});
document.querySelector('.reload').addEventListener('click',function (){
    location.reload()
});