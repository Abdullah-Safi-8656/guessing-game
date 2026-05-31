'use strict';

const guess = document.querySelector(".guess");
const check_btn = document.querySelector(".check");
const msg = document.querySelector(".message");
const score = document.querySelector(".score");
const high_score = document.querySelector(".highscore");
const numberEl = document.querySelector(".number");




check_btn.addEventListener('click', function() {

    const random_num =Math.floor(Math.random()*20)+1;
    
    numberEl.textContent = random_num;
})