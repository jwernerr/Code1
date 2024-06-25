console.log("hello")
let newSpan:HTMLElement=document.createElement("span");
newSpan.textContent="gggggg";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor="red";

let i:number=0
do {
    i++
    console.log(i)
    let newSpan:HTMLElement=document.createElement("span");
    newSpan.textContent="gggggg";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor="red";
} while (i<10)