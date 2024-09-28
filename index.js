let gameSeq=[];
let userSeq=[];
let btns=["blue","red","green","yeollow"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){

    if(started == false)
    {
        console.log("Game is started");
        started=true;
        levelup();
    }
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
btn.classList.remove("flash");
},500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },500);
    }

function levelup(){
    userSeq=[];
    level++;
     h2.innerText=`Level ${level}`;

     let ranIdx=Math.floor(Math.random()*3);
     let randomColor=btns[ranIdx];
     let ranBtn=document.querySelector(`.${randomColor}`);
     gameSeq.push(randomColor);
     console.log(ranBtn);
     gameFlash(ranBtn);
}

function checkAns(idx){ 
    // console.log("curr level:",level);
    if(userSeq[idx]==userSeq[idx])
    {
        console.log("same value");
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText=`Game over press any key to start`;
    }
}
function btnPress(){
    console.log("button was clicked");
    console.log(this);
    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(newbtn of allBtns)
{
    newbtn.addEventListener("click",btnPress);
}