let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#computer-score");

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("game draw");
    msg.innerText="game draw,play again!";
    msg.style.backgroundColor="yellow";
}

const userGame=()=>{
    console.log("user win");
}

const compGame=()=>{
    console.log("computer win");
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
         userscore++;
         uScore.innerText=userscore;
         console.log("You win");
         msg.innerText=`you win! ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor="green";
    }else{
        compscore++;
        cScore.innerText=compscore;
        console.log("Computer wins");
        msg.innerText=`computer wins! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice()
     console.log("comp choice=",compChoice);

     if(userChoice==compChoice){
        drawGame();
     }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
          userWin= compChoice==="scissors"?false:true;
        }else{
           userWin=compChoice==="rock"?false:true; 
        }
        showWinner(userWin,userChoice,compChoice);
     }

}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    });
});























