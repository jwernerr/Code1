window.addEventListener("load",handleLoad);

function handleLoad(_event:Event):void{
    
}

let playmode:string="singleplayer";
let player1wins:number=0;
let player2wins:number=0;
let botwins:number=0;
let turn:string="player1";

let vertcheck:number[]=[];
let horicheck:number[]=[];
let diacheck:number[]=[];

let canvas:HTMLCanvasElement=document.createElement("canvas");
canvas.width=600;
canvas.height=600;
let ctx:CanvasRenderingContext2D=canvas.getContext("2d")!;

interface fielddata{
    xmin:number,
    ymin:number,
    taken:string,
    id:number
}

let fields:fielddata[]=[]


function multiplayer(_event:MouseEvent):void{
    playmode="multiplayer";
    clearbody();
}

function singleplayer(_event:MouseEvent):void{
    playmode="singleplayer";
    clearbody();
}

function clearbody():void{
    let body:HTMLBodyElement=document.getElementsByTagName("body")[0];
    let k=body.childElementCount;
    while(body.childElementCount>0){
        body.removeChild(body.children[body.childElementCount-1])
    }
    canvassetup();
}


function canvassetup():void{

    if (playmode==="singleplayer"){
        turn="player1"
    }

    let body:HTMLBodyElement=document.getElementsByTagName("body")[0];

    let heading:HTMLHeadingElement=document.createElement("h1");
    let headingdiv:HTMLElement=document.createElement("div");
    headingdiv.id="headingdiv";
    heading.innerHTML="TIC TAC TOES";
    body.appendChild(headingdiv);
    headingdiv.appendChild(heading);

    let playersdiv:HTMLDivElement=document.createElement("div");
    playersdiv.id="playersdiv";
    body.appendChild(playersdiv);
    for(let i=0;i<2;i++){
        let player:HTMLHeadingElement=document.createElement("h3");
        player.id="player"+i;
        if(i===0){
            player.innerHTML="Player 1: " +player1wins+ " Wins";
        }
        else{
            if(playmode==="multiplayer"){
                player.innerHTML="Player 2: "+player2wins+" Wins";
            }
            else{
                player.innerHTML="Bot: "+botwins+" Wins";
            }
        }
        if (turn==="player1"&&i===0){
            player.style.backgroundColor="purple";
            player.style.color="white";
        }
        else if(turn!="player1"&&i!=0){
            player.style.backgroundColor="purple";
            player.style.color="white";
        }
        else{
            player.style.backgroundColor="";
            player.style.color="black";
        }
        playersdiv.appendChild(player);
    }
    


    let canvasdiv:HTMLDivElement=document.createElement("div");
    canvasdiv.id="canvasdiv";
    body.appendChild(canvasdiv);
    
    canvasdiv.appendChild(canvas);

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    drawgrid();

    fields=[]
    for(let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            let id=(i+1).toString()+(j+1).toString();
            let numid=Number(id);

            let field:fielddata={
                xmin:i*(canvas.width/3),
                ymin:j*(canvas.height/3),
                taken:"",
                id:numid
            }
            fields.push(field);
        }
    }

    canvas.addEventListener("click",checkplacement);
}

function checkplacement(_event:MouseEvent):void{
    if (turn==="player1"||turn==="player2"){
        let x:number=_event.offsetX;
        let y:number=_event.offsetY;

        
        for(let i=0;i<fields.length;i++){
            if (fields[i].xmin<=x&&x<fields[i].xmin+(canvas.width/3)&&fields[i].ymin<=y&&y<fields[i].ymin+(canvas.height/3)){
                if(fields[i].taken==""){
                    placemark(i);
                    break;
                }
                else{
                    break;
                }
                
            }
        }
    }
}

function placemark(target:number):void{
    fields[target].taken=turn;

    drawfield(target);
}

function drawfield(target:number):void{

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    drawgrid();

    for (let i=0;i<fields.length;i++){
        switch(fields[i].taken){
            case "player1":
                ctx.moveTo(fields[i].xmin+(canvas.width/6)+canvas.width/9,fields[i].ymin+(canvas.height/6));
                ctx.arc(fields[i].xmin+(canvas.width/6),fields[i].ymin+(canvas.height/6),canvas.height/9,0,2*Math.PI);
                ctx.stroke();
                break;
            case "player2":
                ctx.moveTo(fields[i].xmin,fields[i].ymin);
                ctx.lineTo(fields[i].xmin+canvas.width/3,fields[i].ymin+canvas.height/3);
                ctx.moveTo(fields[i].xmin+canvas.width/3,fields[i].ymin)
                ctx.lineTo(fields[i].xmin,fields[i].ymin+canvas.height/3);
                ctx.stroke();
                break;
            case "bot":
                ctx.moveTo(fields[i].xmin,fields[i].ymin);
                ctx.lineTo(fields[i].xmin+canvas.width/3,fields[i].ymin+canvas.height/3);
                ctx.moveTo(fields[i].xmin+canvas.width/3,fields[i].ymin)
                ctx.lineTo(fields[i].xmin,fields[i].ymin+canvas.height/3);
                ctx.stroke();
                break;
        }
    }

    checkforwin(target);
}

function checkforwin(target:number):void{
    let takenbyplayer:number[]=[];
    let newadd:number=fields[target].id;

    vertcheck=[];
    horicheck=[];
    diacheck=[];

    for (let i=0;i<fields.length;i++){
        if (fields[i].taken==turn){
            takenbyplayer.push(fields[i].id)
        }
    }
    if (takenbyplayer.length<3){
        turnchange(); 
    }
    else{
        if (checkvertical(newadd)===false&&checkhorizontal(newadd)===false&&checkdiagonal(newadd)===false){
            for(let i=0;i<fields.length;i++){
                if (fields[i].taken==""){
                    turnchange();
                    break;
                }
                else if(i==fields.length-1){
                    setTimeout(tie,1000);
                    break;
                }
            }
        }
        else{
            if (checkvertical(newadd)===true){
                win(vertcheck);
            }
            else if(checkhorizontal(newadd)===true){
                win(horicheck);
            }
            else{
                win(diacheck);
            }
        }
        
    }
    
}

function turnchange():void{
    let text1:HTMLHeadingElement=document.getElementsByTagName("h3")[0];
    let text2:HTMLHeadingElement=document.getElementsByTagName("h3")[1];
    if (turn=="player1"){
        text1.style.backgroundColor="";
        text1.style.color="black";
        text2.style.backgroundColor="purple";
        text2.style.color="white";
        if (playmode=="singleplayer"){
            turn="bot";
            setTimeout(botaction,2000)
        }
        else{
            turn="player2";
        }
    }
    else{
        text1.style.backgroundColor="purple";
        text1.style.color="white";
        text2.style.backgroundColor="";
        text2.style.color="black";
        turn="player1";
    }

}

function check(check:Number[]):boolean{
    if(check.length!=3){
        console.log("whatthefuck");
    }
    for(let i=0;i<check.length;i++){
        for(let j=0;j<fields.length;j++){
            if (fields[j].id===check[i]){
                if(fields[j].taken!=turn){
                    return false;
                }
            }
        }
    }
    return true;
}

function win(check:number[]){
    console.log(check);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();

    for (let i=0;i<fields.length;i++){
        if(check.includes(fields[i].id)){
            ctx.fillStyle="mediumslateblue";
            ctx.moveTo(fields[i].xmin,fields[i].ymin);
            ctx.fillRect(fields[i].xmin,fields[i].ymin,fields[i].xmin+canvas.width/3,fields[i].ymin+canvas.height/3);
        }
        else{
            ctx.moveTo(fields[i].xmin,fields[i].ymin);
            ctx.clearRect(fields[i].xmin,fields[i].ymin,fields[i].xmin+canvas.width/3,fields[i].ymin+canvas.height/3);

        }
    }
    drawgrid();
    for (let i=0;i<fields.length;i++){
        switch(fields[i].taken){
            case "player1":
                ctx.moveTo(fields[i].xmin+(canvas.width/6)+canvas.width/9,fields[i].ymin+(canvas.height/6));
                ctx.arc(fields[i].xmin+(canvas.width/6),fields[i].ymin+(canvas.height/6),canvas.height/9,0,2*Math.PI);
                ctx.stroke();
                break;
            case "player2":
                ctx.moveTo(fields[i].xmin,fields[i].ymin);
                ctx.lineTo(fields[i].xmin+canvas.width/3,fields[i].ymin+canvas.height/3);
                ctx.moveTo(fields[i].xmin+canvas.width/3,fields[i].ymin)
                ctx.lineTo(fields[i].xmin,fields[i].ymin+canvas.height/3);
                ctx.stroke();
                break;
            case "bot":
                ctx.moveTo(fields[i].xmin,fields[i].ymin);
                ctx.lineTo(fields[i].xmin+canvas.width/3,fields[i].ymin+canvas.height/3);
                ctx.moveTo(fields[i].xmin+canvas.width/3,fields[i].ymin)
                ctx.lineTo(fields[i].xmin,fields[i].ymin+canvas.height/3);
                ctx.stroke();
                break;
        }
    }
    
    setTimeout(winnernotice,1000);
    function winnernotice():void{
        alert(turn+" has won!");
        switch(turn){
            case "player1":
                player1wins++;
                break;
            case "player2":
                player2wins++;
                break;
            case "bot":
                botwins++
                break;
        }
        if (playmode==="singleplayer"){
            turn="player1"
        }
        clearbody();
    }
    
}

function tie(){
    alert("It's a tie!");
    clearbody();
}

function drawgrid(){
    for(let i=1;i<3;i++){
        ctx.moveTo(i*(canvas.width/3),0);
        ctx.lineTo(i*(canvas.width/3),canvas.height);
        ctx.stroke();

        ctx.moveTo(0,i*(canvas.height/3));
        ctx.lineTo(canvas.width,i*(canvas.height/3));
        ctx.stroke();
    }
}

function botaction():void{
    let free:number[]=[];
    let bybot:number[]=[];
    let byplayer:number[]=[];
    for(let i=0;i<fields.length;i++){
        if(fields[i].taken==""){
            free.push(fields[i].id);
        }
        else if (fields[i].taken==="bot"){
            bybot.push(fields[i].id);
        }
        else{
            byplayer.push(fields[i].id);
        }
    }
    if([true,false,false,false][Math.floor(Math.random()*4)]){
        console.log("rando")
        finalmove(free[Math.floor(Math.random()*free.length)]);
    }
    else{
        console.log("calc")
        let done:boolean=false
        let allrowcol:number[][]=[[11,21,31],[12,22,32],[13,23,33],[11,12,13],[21,22,23],[31,32,33],[11,22,32],[13,22,31]]
        for (let i=0;i<allrowcol.length;i++){
            if(almostdone("bot",allrowcol[i])!=0){
                finalmove(almostdone("bot",allrowcol[i]));
                done=true;
                break;
            }
        }
        if(done===false){
            for(let i=0;i<allrowcol.length;i++){
                if (almostdone("player",allrowcol[i])!=0){
                    finalmove(almostdone("player",allrowcol[i]));
                    done=true;
                    break;
                }
            }
        }
        if (done===false){
            if (free.includes(22)){
                finalmove(22);
                done=true;
            }
            else if (free.includes(11)||free.includes(31)||free.includes(13)||free.includes(33)){
                let corners:number[]=[11,31,13,33];

                function shuffleArray(array:number[]):number[] {
                    let indexes:number[]=[];
                    let shuffledarray:number[]=[];
                    let done=false;
                    let indexindex=0
                    for (let i =0; i<array.length; i++) {
                        indexes.push(i);
                        shuffledarray.push(0);
                    }
                    for(let i=0;i<array.length;i++){
                        indexindex=Math.floor(Math.random()*indexes.length)
                        shuffledarray[indexes[indexindex]]=array[i]
                        indexes.splice(indexindex,1);
                    }
                    return shuffledarray
                }

                //corners=shuffleArray(corners);
                for (let i=0;i<corners.length;i++){
                    if (free.includes(corners[i])){
                        finalmove(corners[i]);
                        break;
                    }
                }
            }
            else{
                console.log("nvm")
                finalmove(free[Math.floor(Math.random()*free.length)]);
            }
        }
    }

    function finalmove(moveid:number):void{
        for (let i=0;i<fields.length;i++){
            if (fields[i].id===moveid){
                placemark(i);
                break;
            }
        }
    }

    function almostdone(who:string,row:number[]):number{
        let playerown:number[]=[];
        let botown:number[]=[];
        let freee:number[]=[];
        for (let i=0;i<row.length;i++){
            if (free.includes(row[i])){
                freee.push(row[i]);
            }
            else if (bybot.includes(row[i])){
                botown.push(row[i]);
            }
            else{
                playerown.push(row[i])
            }
        }
        if (who==="bot"){
            if (botown.length===2&&freee.length===1){
                return freee[0];
            }
            else{
                return 0;
            }
        }
        else{
            if (playerown.length===2&&freee.length===1){
                return freee[0];
            }
            else{
                return 0;
            }
        }
        

    }
}

function checkvertical(newadd:number):boolean{
    vertcheck=[newadd];
    if((newadd-1).toString().charAt(1)!="0"){
        vertcheck.push(newadd-1)
        if((newadd-2).toString().charAt(1)!="0"){
            vertcheck.push(newadd-2)
        }
        else{
            vertcheck.push(newadd+1)
        }
    }
    else{
        vertcheck.push(newadd+1,newadd+2)
    }
    return check(vertcheck);
}
function checkhorizontal(newadd:number):boolean{
    horicheck=[newadd]
    if(10<newadd-10){
        horicheck.push(newadd-10)
        if(10<newadd-20){
            horicheck.push(newadd-20)
        }
        else{
            horicheck.push(newadd+10)
        }
    }
    else{
        horicheck.push(newadd+10,newadd+20)
    }
    return check(horicheck);
}

function checkdiagonal(newadd:number):boolean{
    if ([21,12,32,23].includes(newadd)){
        return false;
    }
    else if(newadd===22){
        if(check([11,33])===false&&check([13,31])===false){
            return false;
        }
        else{
            if (check([11,33])===true){
                diacheck=[11,33,22];
            }
            else{
                diacheck=[13,31,22];
            }
            return true
        }
    }
    else{
        if ([11,33].includes(newadd)){
            diacheck=[11,22,33];
            return check(diacheck);
        }
        else{
            diacheck=[31,22,13];
            return check(diacheck);
        }
    }
}