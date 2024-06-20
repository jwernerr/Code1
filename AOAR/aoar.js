"use strict";
//assigning default values to variables
let visits = 0;
let hastail = true;
let ratname = "Rattus Rattus";
let trapsnapped = false;
let hascheese = false;
start1();
//User input nonsense
function nonsense() {
    alert("I don't speak the language of gods. Try again.");
}
//Very beginning
function start1() {
    ratname = prompt("You are a rat. What is your name?", "Rattus Rattus");
    initpos();
}
//Retry start
function start2() {
    ratname = prompt("New rat, new luck! What's your name this time?", "Rattus Rattus the second");
    initpos();
}
//Initial position
function initpos() {
    let prompttext = "You are " + ratname + " the rat. Your salty mother sent you to get some food for your family, since you are now a grown up rat. You just left your house and are now confronted with a delicious looking piece of cheese and a mysterious carpet cave. What do you want to inspect first? CHEESE, CAVE or just go back to your HOLE?";
    let word = prompt(prompttext, "hole");
    word = word.toLowerCase();
    switch (word) {
        case "cheese":
            //xxxx
            break;
        case "cave":
            //xxx
            break;
        case "hole":
            //xxxx
            break;
        default:
            nonsense();
            initpos();
            break;
    }
}
