"use strict";
//const wordsArray:string[]= ["rat", "cheese", "mouse", "mousetrap", "tail", "feet", "whiskers", "fur"];
//let iNdex:number= Math.floor(Math.random() * 8);
//let newSpan = document.createElement("span");
//document.body.appendChild(newSpan);
//newSpan.textContent = wordsArray[iNdex];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createRandomElement() {
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.width = `${getRandomInt(50, 100)}px`;
    element.style.height = `${getRandomInt(50, 100)}px`;
    element.style.left = `${getRandomInt(0, window.innerWidth - 100)}px`;
    element.style.top = `${getRandomInt(0, window.innerHeight - 100)}px`;
    element.style.color = getRandomColor();
    element.innerText = 'Hello!';
    return element;
}
for (let i = 0; i < 3; i++) {
    const randomElement = createRandomElement();
    document.body.appendChild(randomElement);
}
