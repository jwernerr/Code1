//assigning default values to variables

let visits:number=0;
let hastail:boolean=true;
let ratname:string="Rattus Rattus";
let trapsnapped:boolean=false;
let hascheese:boolean=false;

start1();


//User input nonsense
function nonsense(): void{
    alert("I don't speak the language of gods. Try again.");
}
//Very beginning
function start1(): void{
    visits=0;
    hastail=true;
    trapsnapped=false;
    hascheese=false;
    ratname=prompt("You are a rat. What is your name?", "Rattus Rattus")!;
    initpos();
}

//Retry start
function start2(): void{
    visits=0;
    hastail=true;
    trapsnapped=false;
    hascheese=false;
    ratname=prompt("New rat, new luck! What's your name this time?", "Rattus Rattus the second")!;
    initpos();
}

//start after a win
function start3():void{
    visits=0;
    hastail=true;
    trapsnapped=false;
    hascheese=false;
    ratname=prompt("What a run! Great Job! But there are more endings to be discovered. Lets go! How would you like to call your rat this time?", "Rattus Rattwos")!
    initpos();
}

//Initial position
function initpos(): void{
    let prompttext:string="You are " + ratname + " the rat. Your salty mother sent you to get some food for your family, since you are now a grown up rat. You just left your house and are now confronted with a delicious looking piece of cheese and a mysterious carpet cave. \n \nWhat do you want to inspect first? CHEESE, CAVE or just go back to your HOLE?";
    let word:string=prompt(prompttext, "cheese")!
    word=word.toLowerCase();
    switch (word) {
        case "cheese":
            cheese();
            break;
        case "cave":
            cave();
            break;
        case "hole":
            hole();
            break;
        default:
            nonsense();
            initpos();
            break;
    }
}

//Rat returns to its hole
function hole():void{
    if (hascheese===false){
        if (hastail===true){
            switch(visits){
                case 0:
                    visit1();
                    break;
                case 1:
                    visit2();
                    break;
                case 2:
                    visit3();
                    break;
                default:
                    visit1();
                    break;
                }
            }
        else{
            let alerttext:string="You return to your hole, where you meet your mother. She is about to snap at you since you still haven't brought anything to eat, but then she notices your bloody tail that you're still carrying with you. She sighs. “Well, whatever " + ratname + ". This will do.” She grabs your tail with her grabby hands and starts munching on it. You watch her in horror, but you're also relieved that it's just your tail and not… you. \n \nYOU WON";
            alert(alerttext);
            start3();
        }
    }
    else{
        let alerttext:string="You proudly return to your hole, carrying the piece of cheese you've acquired. Your mother appears immediately, sniffing the air. “I smell something delicious… oh, and cheese.” You sniff the air. It reeks of blood and you shudder at the implication. “Well then, " + ratname + ". Hand the cheese over.” You drop the cheese and she gulps it down in one piece. Shortly after, she starts coughing, collapses and dies. Seems the suspiciously delicious smelling cheese was poisoned after all… Well, you're free now! Good job! \n \nYOU WON";
        alert(alerttext);
        start3();
    }
}

//when visiting the hole for the first time
function visit1(): void{
    let prompttext:string="You go back to your hole where you meet your mother. She looks annoyed and shouts at you: “I am still waiting for my dinner, now go and get something to eat!”\n \nYou return to the delicious cheese and the mysterious carpet. What do you want to explore now?\nCHEESE, CAVE or return to HOLE?";
    let word:string=prompt(prompttext, "cheese")!
    word=word.toLowerCase();
    switch (word){
        case "cheese":
            visits++;
            cheese();
            break;
        case "cave":
            visits++;
            cave();
            break;
        case "hole":
            visits++;
            hole();
            break;
        default:
            nonsense();
            visit1();
            break;
    }
}

//visiting the hole for the second time
function visit2(): void{
    let prompttext:string="You return to your hole again where you meet your mother again. She looks hangry and shouts: “Still nothing to eat? What's taking so long you whippersnapper? Am I supposed to eat you?!” Sounds like your mother really needs something to eat, she would literally eat anything. \n \nYou return to the Cheese and the mysterious looking Cave. What do you want to have a look at now? \nCHEESE, CAVE, return to HOLE?";
    let word:string=prompt(prompttext, "cheese")!
    word=word.toLowerCase();
    switch (word){
        case "cheese":
            visits++;
            cheese();
            break;
        case "cave":
            visits++;
            cave();
            break;
        case "hole":
            visits++;
            hole();
            break;
        default:
            nonsense();
            visit2();
            break;
    }
}

//the rat visits their mother for a third time... wow
function visit3():void{
    alert("You return to your hole for a 3rd time. You can see your mother crouching in the corner. She whispers something you can partially understand: “..hungry…can't…anymore…I…eat…” You ask yourself why you hear boss music and why there is a health bar on the bottom of your screen. She turns around and her eyes look like they are on fire. “MY CHILD HAS RETURNED WITH FOOD, I WILL EAT YOU WHOLE!” She jumps at you and your view becomes darker and darker until you only see darkness. \n \nYOU DIED \ntry again. *burp*");
    start2();
}

//Arriving at the Cheese
function cheese(): void{
    if(hascheese===false){
        let prompttext:string="Obviously you go to the cheese, because you need to find something to eat. The cheese is presented on a shiny pedestal. This cheese looks simply delicious, but something seems suspicious about the way it is presented. \n \nHow do you want to approach the cheese? GRAB it with your grabby hands, POKE it with your tail or leave it be and inspect the CAVE instead?";
        let word:string=prompt(prompttext, "grab")!
        word=word.toLowerCase();
        switch(word){
            case "grab":
                grab();
                break;
            case "poke":
                poke();
                break;
            case "cave":
                cave();
                break;
            default:
                nonsense();
                cheese();
                break;
        }
    }
    else{
        let prompttext:string="You returned to the cheese, but... The cheese is already in your possesion! Maybe you saw an illusion of the cheese because of blood loss. There is nothing you can do here anymore. \n \n where do you want to go next? \nGo to the CAVE or visit your HOLE?"
        let word:string=prompt(prompttext, "cave")!
        word=word.toLowerCase();
        switch(word){
            case "cave":
                cave();
                break;
            case "hole":
                hole();
                break;
            default:
                nonsense();
                cheese();
                break;
        }
    }
}

//Grabbing the cheese
function grab(): void{
    if(trapsnapped===false){
        alert("Your mother wants her food as quick as possible, obviously you grab it with your grabby hands. You approach the delicious cheese, your mouth fills with spit. This cheese just looks so tasty! You lift the cheese when your view turns black and you feel pain in your neck. \nLike your mother always told you, safety first. \n \nYOU ARE DEAD \nnow try again.");
        start2();
     }

    else{
        let prompttext:string="You cautiously grab the cheese. Great, you have acquired food that you could bring your mother now! The cheese smells absolutely delicious… Maybe you could eat it and find something else for your mother? Or maybe you should check out the cave first? \nWhat will you do next? Return to your HOLE to bring the cheese to your mother, EAT the cheese or inspect the CAVE?";
        let word:string=prompt(prompttext, "eat")!;
        word=word.toLowerCase();
        switch(word){
            case "hole":
                hascheese=true;
                hole();
                break;
            case "eat":
                hascheese=true;
                eat();
                break;
            case "cave":
                hascheese=true;
                cave();
                break;
            default:
                nonsense();
                grab();
                break;
        }
    }
}

//When Rattus Rattus eats cheese
function eat():void{
    alert("The cheese just smells too delicious… You take a bite, then another one and soon, the piece of cheese is gone. Before you can think about what you will bring your mother, your legs give out and you feel yourself getting weaker. Your vision gets darker and darker… Seems the cheese was poisoned after all. \n \nYOU DIED \n*munch munch* try again *munch munch*");
    start2();
}

//poking the cheese
function poke():void{
    let prompttext:string="This seems way too perfect to be true… You cautiously poke the cheese with your tail, and SNAP! The mouse trap snaps, trapping the tip of your tail. You wince in pain and attempt to pull your tail out, but to no avail. You're left with one last option to survive… You need to bite off a part of your tail. After some munching, you're finally free. With more movement range, you manage to pull the dead tip of your tail out of the trap. You decide to take it with you. \n \nWell, what now? Will you GRAB the cheese now that the trap has snapped already, will you return to your HOLE or will you inspect the CAVE next?";
    let word:string=prompt(prompttext,"grab")!
    word=word.toLowerCase();
    switch(word){
        case "grab":
            trapsnapped=true;
            hastail=false;
            grab();
            break;
        case "hole":
            trapsnapped=true;
            hastail=false;
            hole();
            break;
        case "cave":
            trapsnapped=true;
            hastail=false;
            cave();
            break;
        default:
            nonsense();
            poke();
            break;
    }
}

//Rat decides to inspect cave
function cave():void{
    let prompttext:string="You're curious what could be inside this cave and walk with your tiny little legs to the Carpet Cave. It looks a lot smaller now than it did from far away. The cave is dark but you can see light at the end of the tunnel. Would you like to go through the cave? YES let's do it, NO I'm not brave enough";
    let word:string=prompt(prompttext, "no")!
    word=word.toLowerCase();
    switch(word){
        case "yes":
            yes();
            break;
        case "no":
            no();
            break;
        default:
            nonsense();
            cave();
            break;
    }
}

//Rat doesn't enter the cave after all
function no():void{
    let prompttext:string="You accept your cowardness and leave the cave behind, maybe you will return to it later. You go back to your old position where you can see the cheese again. What do you want to do now?\nGo to the CHEESE, go back to the CAVE or go to your HOLE?";
    let word:string=prompt(prompttext,"cheese")!;
    word=word.toLowerCase();
    switch(word){
        case "cheese":
            cheese();
            break;
        case "cave":
            cave();
            break;
        case "hole":
            hole();
            break;
        default:
            nonsense();
            no();
            break;
    }
}

//Rat decides to enter the cave
function yes():void{
    let prompttext:string="You go through the cave, it's very narrow and dark, but you follow the way to the light at the end. At the end of the cave, you see whiskers and paws approaching the end of the cave. It's a huge cat staring at you from the outside. “Meow.” She seems to be interested in you. What are you going to do?\nRUN away and leave the cave or APPROACH the cat?";
    let word:string=prompt(prompttext,"run")!
    word=word.toLowerCase();
    switch(word){
        case "run":
            run();
            break;
        case "approach":
            approach();
            break;
        default:
            nonsense();
            yes();
            break;
    }
}

//Runs away from cat
function run():void{
    alert("Your rat instincts tell you to run away. You run so fast that the wind hurts in your eyes, but you won't stop. Suddenly you stop. Something heavy not only closed the way out of the cave, but it also squished your body into mushy porridge. That's how it feels like to be stepped on by a human. Your view turns dark. That's the end of your adventure\n \nYOU DIED\nPlease try again.");
    start2();
}

//Approaches cat
function approach():void{
    if (hastail===true){
        alert("You cautiously approach the cat. It scans you with its big curious eyes. You almost feel a connection between the two of you… that is until the cat reaches out and catches you in between its claws. You feel pain and everything turns dark.\n \nYOU DIED\nYou may try again.");
        start2();
    }
    else {
        let prompttext:string="You cautiously approach the cat. It scans you with its big curious eyes, almost looking sad. Maybe it pities you because you've lost your tail… The cat lowers its head and meows softly. It doesn't seem to intend to harm you, but your mother has always told you to never trust a cat.\n \nWhat will you do? Will you stay SKEPTICAL or will you TRUST the cat?";
        let word:string=prompt(prompttext, "skeptical")!;
        word=word.toLowerCase();
        switch (word){
            case "skeptical":
                skeptical();
                break;
            case "trust":
                trust();
                break;
            default:
                nonsense();
                approach();
                break;
        }
    }
}

//rat is skeptical and does not trust the kitty cat
function skeptical():void{
    alert("A rat never trusts a cat, that's rule number 1 in the Rat-Bible. You turn around and try to run away, when you feel claws penetrating your body. The cat instincts overcame the cat, as rule number 1 in cat logics is to always attack a running meal. \nThat's what you get from not trusting a lovely cat. \n \nYOU DIED \ntry again meow");
    start2();
}

//rat trusts the cat
function trust():void{
    if(hascheese===true){
        let prompttext:string="Of course you trust a furry fellow. You can use any help you can get. You still have the cheese you got from the nasty trap. \n \nWould you like to SHARE your cheese with the cat or KEEP the cheese for yourself?";
        let word:string=prompt(prompttext, "keep")!
        word=word.toLowerCase();
        switch(word){
            case "share":
                share();
                break;
            case  "keep":
                keep();
                break;
            default:
                nonsense();
                trust();
                break;
        }
    }
    else{
        alert("Of course you trust a furry fellow. You can use any help you can get. The cat nods at you and crouches down, inviting you to climb its back. You hesitate for a moment before gathering all of your rat courage and jumping on top of your new friend. You claw at the fur so you don't fall down as the cat jumps through an open window that you never would have reached on your own. You sniff the fresh air of the outside world. \n \nYou're free! You've left your scary mother behind and got yourself a new friend that will keep you safe outdoors. \nYOU WON!");
        start3();
    }
}

function share():void{
    alert("As a gentlerat, you share your meal with your new friend. The cat gladly accepts your offer and eats a bit of your cheese. However, cats shouldn't eat products with milk, because they will get diarrhea. The cat needs to take a dump on the floor. It smells so bad that you burst in tears and your body automatically shuts down. Your view turns black and you cannot move a single grabby hand. \nThat's how it feels like to get shit on. \n \nYOU DIED. \nTry again. *sniff sniff*");
    start2();
}

function keep():void{
    alert("You decide to keep the cheese as you might need it for yourself. The cat nods at you and crouches down, inviting you to climb its back. You hesitate for a moment before gathering all of your rat courage and jumping on top of your new friend with your cheese. You claw at the fur so you don't fall down as the cat jumps through an open window that you never would have reached on your own. The cheese fell off during the acrobatic jump of the cat, but that doesn't matter because there are plenty of things to eat outdoors (and the cheese was poisoned anyways, maybe your mother will eat it >:D). You sniff the fresh air of the outside world. \n \nYou're free! You've left your scary mother behind and got yourself a new friend that will keep you safe outdoors. \nYOU WON!");
    start3();
}