const wordsarray=["rat", "cheese", "mouse", "mousetrap", "tail", "feet", "whiskers", "fur"]

let index:number=Math.floor(Math.random() * 8)
let newSpan:HTMLElement=document.createElement("span");
newSpan.textContent=wordsarray[index]
document.body.appendChild(newSpan);