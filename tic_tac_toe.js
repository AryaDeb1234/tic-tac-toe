let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new_btn");

let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");

let count=1;
let turnO=true;//for player O

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

function disableboxes(){
    for (let box of boxes) {
        box.disabled=true;
    }
}
function enableboxes(){
    for (let box of boxes) {
        box.disabled=false;
        box.innerHTML="";
    }
}
function resetgame(){
    turnO = true;
    count = 1; // Reset the move count to 1
    enableboxes();
    msgcontainer.classList.add("hide");
}
function showwinner(event){
  //  console.log(count);
    msg.innerHTML="winner is "+event;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
function checkwinner() {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            //console.log("winner ", pos1);
            showwinner(pos1);
            return; // Stop further execution once a winner is found
        }
    }
    console.log(count); 
    // Only check for a draw after ensuring no winner is found
    if (count == 9) {
        msg.innerHTML = "Match Is Draw";
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
}

function func(){
   // console.log("box ");
    //this.innerHTML="abcd";//"this" give us the access of that element
    if(turnO){//player O
        this.innerHTML="O";
        turnO=false;
    }else{//player X
       this.innerHTML="X"
       turnO=true;
    }
    this.disabled=true;/*****/
    checkwinner();
    count++;
}
let n=boxes.length;
for(let i=0;i<n;i++){
    boxes[i].addEventListener("click",func);
    
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);