let dieRolls = [];
let rollButton = document.querySelector("#dice-button");
let userInput = document.querySelector("#user-input");
let diceSum = document.querySelector("#dice-total");
let showButton = document.querySelector("#roll-result");
let rollList = document.querySelector("#all-rolls");
let resetRolls = document.querySelector("#reset-button");

rollButton.addEventListener("click", function () {
  let value = Number(userInput.value);
  let index = 0;
  while (value > index) {
    dieResult = Math.floor(Math.random() * 6 + 1);
    dieRolls.push(dieResult);
    console.log(dieRolls);
    diceSum.innerHTML = dieRolls.reduce(addArray);
    function addArray(total, Number) {
      return total + Number;
    }
    index++;
  }
});

showButton.addEventListener("click", function () {
  let index1 = 0;
  while (dieRolls.length > index1) {
    let fullList = document.createElement("li");
    fullList.innerHTML = dieRolls[index1];
    document.getElementById("all-rolls").appendChild(fullList);
    index1++;
  }
});

resetRolls.addEventListener("click", function () {
  location.reload();
});
