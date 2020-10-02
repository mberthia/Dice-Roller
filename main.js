let dieRolls = [];
let rollButton = document.querySelector("#dice-button");
let userInput = document.querySelector("#user-input");
let diceSum = document.querySelector("#dice-total");
let showButton = document.querySelector("#roll-result");
let rollList = document.querySelector("#show-rolls");

rollButton.addEventListener("click", function () {
  let value = Number(userInput.value);
  let index = 0;
  while (value > index) {
    console.log(Math.floor(Math.random() * 6 + 1));
    index++;
  }
});
