let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let guessField = document.querySelector(".guessField");
let max = 100;
let min = 1;
let prev = "";
let chances = 10;

let answer = Math.floor(Math.random() * (max - min + 1)) + min;

let btn = document.querySelector(".guessSubmit");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  guesses.innerHTML = prev;
  let enterVal = Number.parseInt(guessField.value);
  if (chances <= 0) {
    document.body.classList.add("lost");
  } else {
    if (enterVal === answer) {
      document.body.classList.add("winner");
      lowOrHi.innerHTML = "You enetered a correct number";
    } else if (enterVal < answer) {
      lowOrHi.innerHTML = "You enetered a smaller number";
    } else {
      lowOrHi.innerHTML = "You enetered a greater number";
    }
    prev = enterVal;
    chances--;
    lastResult.innerHTML = chances;
  }
});

guessField.addEventListener("focus",(e)=>{
    if(e.target.value.length>0){
        e.target.value="";
    }
})
