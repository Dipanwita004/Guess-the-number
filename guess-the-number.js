let input=document.getElementById("value");
 let btn=document.getElementById("btn");
 let msg=document.getElementById("message");
 let attempts=document.getElementById("attempts");


    let random=Math.floor(Math.random()*100)+1;

let maxattempts=7;
let currentattempts=0;

function guessnumber(){
    let guess=Number(input.value);


    
    if(guess<1 || guess>100){
        msg.innerText= "Invalid range,try again!!!!";
        return;
    }
    currentattempts++;
     if(guess===random){
        msg.innerText = "Correct! You guessed it!";
        btn.disabled = true;
    }
    else if(random<guess){
        msg.innerText = "Too High!";
    }
    else{
        msg.innerText = "Too Low!";
    }
    

    attempts.innerText="Attempts Left:"+(maxattempts-currentattempts);

    if (currentattempts >= maxattempts && guess !== random) {
        msg.innerText =
            "Game Over! Number was " + random;
        btn.disabled = true;
    }

}
btn.addEventListener("click", guessnumber);