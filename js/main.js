"use strict";

import { ui } from "./ui.js";
let game = new ui();
let mmorpgButton = document.getElementById("mmorpgButton");
let shooterButton = document.getElementById("shooterButton");
let sailingButton = document.getElementById("sailingButton");
let permadeathButton = document.getElementById("permadeathButton");
let superheroButton = document.getElementById("superheroButton");
let pixelButton = document.getElementById("pixelButton");

let buttonsArray = [
  mmorpgButton,
  shooterButton,
  sailingButton,
  permadeathButton,
  superheroButton,
  pixelButton,
];

function removeActiveStatus(buttonsArray) {
  for (const button of buttonsArray) {
    console.log(button);
    if (button.classList.contains("text-primary")) {
      button.classList.replace("text-primary", "text-white");
    }
  }
}


mmorpgButton.addEventListener("click", function () {
  changeDisplayedCategory(this);
});
shooterButton.addEventListener("click", function () {
  changeDisplayedCategory(this);
});
sailingButton.addEventListener("click", function () {
  changeDisplayedCategory(this);
});

shooterButton.addEventListener("click", function () {
  changeDisplayedCategory(this);
});

permadeathButton.addEventListener("click", function () {
    changeDisplayedCategory(this);
  });
  superheroButton.addEventListener("click", function () {
    changeDisplayedCategory(this);
  });
  pixelButton.addEventListener("click", function () {
    changeDisplayedCategory(this);
  });




  

function changeDisplayedCategory(button) {
  let category = button.innerText.toLowerCase();
  game.getGamesData(category);
  removeActiveStatus(buttonsArray);
  button.classList.replace("text-white", "text-primary");
}
