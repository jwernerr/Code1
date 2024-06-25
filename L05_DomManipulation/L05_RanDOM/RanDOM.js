"use strict";
const wordsarray = ["rat", "cheese", "mouse", "mousetrap", "tail", "feet", "whiskers", "fur"];
let index = Math.floor(Math.random() * 8);
let newSpan = document.createElement("span");
newSpan.textContent = wordsarray[index];
document.body.appendChild(newSpan);
