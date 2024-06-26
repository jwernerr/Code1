"use strict";
let ElementText = [
    "hello", "world", "hello world"
];
let ElementColor = [
    "red", "yellow", "orange"
];
let i = 0;
do {
    i++;
    console.log(i);
    let newSpan = document.createElement("span");
    newSpan.textContent = ElementText[Math.floor(Math.random() * 5)];
    document.body.appendChild(newSpan);
    newSpan.style.color = ElementColor[Math.floor(Math.random() * 8)];
    newSpan.style.fontSize = Math.random() * 50 + "pt";
    newSpan.style.position = "absolute";
    newSpan.style.top = Math.random() * 90 + "%";
    newSpan.style.left = Math.random() * 85 + "%";
} while (i < 200);
