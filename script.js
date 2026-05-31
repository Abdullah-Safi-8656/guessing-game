'use strict';


const check_btn = document.querySelector(".check");
const numberEl = document.querySelector(".number");
const GuesInput = document.querySelector(".guess");

let score = 20;
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


// creating a randome number
const random_number = Math.floor(Math.random() * 20 ) + 1;


// Chekc Button event fanctionality
check_btn.addEventListener('click', function() {

    const guess = Number(document.querySelector(".guess").value);

    // clearing timeout id
    clearTimeout(messageTimer)

    if(!guess){
        desplayMessage("⛔️ No number!")
        numDisplay("?")
        messageTimer = setTimeout(() => {
            desplayMessage("Start guessing...")
        }, 1000);
    }



    else if (guess == random_number){
        numDisplay(random_number)

        desplayMessage("🎉 Correct Number!");
        numberEl.textContent = random_number;

        document.body.style.backgroundColor = 'green';
        numberEl.style.width = '30rem';

    }


    else if (guess > random_number) {
        desplayMessage('📈 Too high!');
    } else if (guess < random_number) {
        desplayMessage('📉 Too low!');
    }


    else {
        desplayMessage("❌  Wrong guess");

        setTimeout(()=> {
            desplayMessage('Start guessing...')
        }, 1000);
    }

    

    GuesInput.value = '';
})