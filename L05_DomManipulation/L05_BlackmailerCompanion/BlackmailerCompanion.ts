let chosencharacter:string;
window.addEventListener("load",handleLoad);

function handleLoad(_event:Event):void{
    let mail:HTMLElement=document.querySelector("div#mail")!;
    mail.addEventListener("click",placeletter);
    document.addEventListener("keydown",choosecharacter);
}

function placeletter(_event:MouseEvent):void{
    // console.log(_event);
    let x:number=_event.offsetX;
    let y:number=_event.offsetY;

    let mail:HTMLElement=<HTMLElement>_event.target;
    let letter:HTMLSpanElement=document.createElement("span");
    mail.appendChild(letter);

    letter.textContent=chosencharacter;
    letter.style.left=x+"px";
    letter.style.top=y+"px";
}

function choosecharacter(_event:KeyboardEvent):void{
    // console.log(_event);
    chosencharacter=_event.key;
}
