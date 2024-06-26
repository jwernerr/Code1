let chosencharacter:string;
window.addEventListener("load",handleLoad);

function handleLoad(_event:Event):void{
    let mail:HTMLElement=document.querySelector("div#mail")!;
    mail.addEventListener("click",placeletter);
    document.addEventListener("keydown",chooseletter);
}

function placeletter(_event:MouseEvent):void{
    console.log(_event);
}

function chooseletter(_event:KeyboardEvent):void{
    console.log(_event);
}