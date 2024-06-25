"use strict";
const wordsarray = ["rat", "cheese", "mouse", "mousetrap", "tail", "feet", "whiskers", "fur"];
let index = Math.floor(Math.random() * 8);
let newSpan = document.createElement("span");
document.body.appendChild(newSpan);
newSpan.textContent = wordsarray[index];
