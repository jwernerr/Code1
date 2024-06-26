"use strict";
let ElementText = [
    "hello", "world", "hello world", "amogus"
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
    newSpan.addEventListener("click", fncclick);
} while (i < 200);
function fncclick(_event) {
    let SpanTarget = _event.target;
    switch (SpanTarget.textContent) {
        case "hello":
            SpanTarget.textContent = "goodbye";
            break;
        case "hello world":
            SpanTarget.textContent = "goodbye world";
            break;
        case "amogus":
            SpanTarget.textContent = "ඞ";
            break;
        default:
            SpanTarget.textContent = "amogus";
            break;
    }
}
;
