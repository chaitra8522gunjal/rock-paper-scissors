let userScore=0;
let comScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const comscorePara = document.querySelector("#com-score")

//com ko rock,paper,scissor random val choose karne ke liye func
const gencomChoice=()=>{
    const option=["rock","paper","scissors"];
     const randomIdx = Math.floor(Math.random() * 3);   //yaha par random no generate kiya aur isse randomIdx vari mai store kiya
     return option[randomIdx];

    //Math.random() - ye method 0 se lekar 1 ke bich mai koi bhi random val generate karta hai
    //O/P - 0.9158009827311737
    //Math.random() * 10 - agar hame 0 se lekar 9 ke bich mai no chahiye to 
    //O/P - 0.9158009827311737
    //Math.floor(Math.random() * 10 )- agar hame decimal no nahi chahiye ageke to 
    //O/P - 2
}

const drawGame=()=>{           // this func for when com and user are same choice
    //console.log("game was draw");
    msg.innerText=" game was draw, play again";
    msg.style.backgroundColor="#081b31";

}

const showWinner=(userWin, userChoice, comChoice)=>{
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore;
       // console.log("you win");
        msg.innerText=` you win! your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comScore++;
        comscorePara.innerText=comScore;
        //console.log("you lose");
        msg.innerText=` you lose! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

let userWin = true;

const playGame=(userChoice)=>{
  //console.log("user choice =", userChoice)
   const comChoice= gencomChoice();
   //console.log("comp choice =", comChoice)

   if(userChoice === comChoice){
    drawGame();      //draw game
   }
   else{
  
  if(userChoice === "rock"){ 
    //com ky choose karega rock to nahi kyu ki oo draw mai chala jata fir
    userWin= comChoice === "paper" ? false: true;  
       //user ne rock diya aur com ne paper diya to user har jayega isaliye false ,agar com ne scissor diya to isaliye true diya hai true hone par user jitega
  
    }else if(userChoice === "paper"){
    //com ky choose karega paper to nahi kyu ki oo draw mai chala jata fir
    userWin=comChoice === "scissors" ?false : true;
    //user ne paper diya aur comp ne scissors diya to user har jayega isaliye false ,agar com ne rock diya to isaliye true diya hai true hone par user jitega
  
  }else{
     userWin=comChoice === "rock"? false : true
  }
       showWinner(userWin, userChoice, comChoice);
   }
}

choices.forEach((choice)=>{
    //console.log(choice)
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");   //for get img id on console
    // console.log("choice was click", userChoice)   playgame mai ye logic likhenge
    playGame(userChoice);
    })
})