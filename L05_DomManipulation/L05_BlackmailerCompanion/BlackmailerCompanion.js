"use strict";
let chosencharacter = "A";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let mail = document.querySelector("div#mail");
    mail.addEventListener("click", placeletter);
    document.addEventListener("keydown", choosecharacter);
}
function placeletter(_event) {
    // console.log(_event);
    let x = _event.offsetX;
    let y = _event.offsetY;
    let mail = _event.target;
    let letter = document.createElement("span");
    mail.appendChild(letter);
    letter.textContent = chosencharacter;
    letter.style.left = x + "px";
    letter.style.top = y + "px";
    letter.addEventListener("click", deleteletter);
}
function choosecharacter(_event) {
    // console.log(_event);
    chosencharacter = _event.key;
}
function deleteletter(_event) {
    let target = _event.target;
    let parent = target.parentNode;
    parent.removeChild(target);
}
