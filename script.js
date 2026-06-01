'use strict';

const check_btn = document.querySelector(".check");
const numberEl = document.querySelector(".number");
const GuesInput = document.querySelector(".guess");
const again_btn = document.querySelector(".again");
const my_score = document.querySelector(".score");
const my_high_score = document.querySelector(".highscore");
const refresh_btn = document.querySelector('.ref-btn');

let score = 0;
let high_score = 0;


// Diplay Message Functions
let desplayMessage = function(Message){
    document.querySelector(".message").textContent = Message;
}

// Display number message
let numDisplay = function(numMsg){
    document.querySelector(".number").textContent = numMsg;
}


// storing timeout
let messageTimer;

// chances
let chances = 5;

// creating a randome number
let random_number = Math.floor(Math.random() * 20 ) + 1;


// Chekc Button fanctionality
check_btn.addEventListener('click', function() {

    let guess = Number(document.querySelector(".guess").value);

    // clearing timeout id
    clearTimeout(messageTimer)


    if (guess !== random_number) {
        chances-=1;

        if (chances == 0) {
            desplayMessage("You have lost the game.");
            document.body.style.backgroundColor = 'red';
            return;
        };
    }

    // resting color to it's normal state
    document.body.style.backgroundColor = '';


    if(!guess){
        desplayMessage("⛔️ No number!")
        numDisplay("?")
        messageTimer = setTimeout(() => {
            desplayMessage("Start guessing...")
        }, 1000);
    }



    else if (guess == random_number){
        // incerasing score by 1
        score+=1
  
        numDisplay(random_number)
        desplayMessage("🎉 Correct Number!");

        numberEl.textContent = random_number;
        document.body.style.backgroundColor = 'green';
        numberEl.style.width = '30rem';

    }


    else if (guess > random_number) {
        desplayMessage('📈 Too high!');
    } 
    
    else if(guess < random_number){
        desplayMessage('📉 Too low!');
    }


        // score Logic
    if (score > high_score)
    {
        high_score = score;

        localStorage.setItem('high_score', high_score)
    }
    my_score.textContent = score


    // clearing input field
    GuesInput.value = '';
});



// Again Button functionality
again_btn.addEventListener('click', function() {
    random_number = Math.floor(Math.random() * 20 ) + 1;

    chances = 5;

    desplayMessage('Start guessing...');
    numDisplay("?");

    numberEl.style.width = '15rem';
    GuesInput.value = '';
    document.body.style.backgroundColor = '#222';
    
});


// Referesh button fanctionality
refresh_btn.addEventListener('click', function() {
    location.reload();
})

let HIGH_SCORE = Number(localStorage.getItem('high_score'));
my_high_score.textContent = HIGH_SCORE; 
