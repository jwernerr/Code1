"use strict";
let chosencharacter;
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let mail = document.querySelector("div#mail");
    mail.addEventListener("click", placeletter);
    document.addEventListener("keydown", chooseletter);
}
function placeletter(_event) {
    console.log(_event);
}
function chooseletter(_event) {
    console.log(_event);
}
