let chosencharacter:string="A";
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

    letter.addEventListener("click",deleteletter);
}

function choosecharacter(_event:KeyboardEvent):void{
    // console.log(_event);
    chosencharacter=_event.key;
}

function deleteletter(_event:MouseEvent):void{
    let target:Node=<Node>_event.target;
    let parent:Node=target.parentNode!;
    parent.removeChild(target)
}