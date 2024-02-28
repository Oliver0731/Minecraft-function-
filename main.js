function catchFish(codProb, salmonProb, tropicalProb, pufferProb) {
  let randNum = Math.random();
  if (randNum < codProb) {
    numCod++;
    numCodSpan.textContent = numCod;
    resultImg.src = "img/Raw-Cod.png";
  } else if (randNum < codProb + salmonProb) {
    numSalmon++;
    numSalmonSpan.textContent = numSalmon;
    resultImg.src = "img/Raw-Salmon.png";
  } else if (randNum < codProb + salmonProb + tropicalProb) {
    numTropical++;
    numTropicalSpan.textContent = numTropical;
    resultImg.src = "img/Tropical-Fish.png";
  } else {
    numPuffer++;
    numPufferSpan.textContent = numPuffer;
    resultImg.src = "img/Pufferfish.png";
  }
}

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === "steve") {
    catchFish(0.7, 0.2, 0.05, 0.05); // Steve's probabilities
  } else if (character === "alex") {
    catchFish(0.1, 0.1, 0.3, 0.5); // Alex's probabilities
  } else if (character === "villager") {
    catchFish(0.25, 0.25, 0.25, 0.25); // Villager's probabilities
  }
}

// Variables to store HTML Elements
let fishBtn = document.getElementById("fish-btn");
let charSelect = document.getElementById("character-select");
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener("click", fishBtnClicked);
