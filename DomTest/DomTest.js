"use strict";
console.log("hello");
let newSpan = document.createElement("span");
newSpan.textContent = "gggggg";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";
let i = 0;
do {
    i++;
    console.log(i);
    let newSpan = document.createElement("span");
    newSpan.textContent = "gggggg";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red";
} while (i < 10);
