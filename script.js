let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".newGame");
let turnO= true;

const winPatterns= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let isBoxEmpty= () =>{
    let empty= false;
    boxes.forEach((box) => {
        if (box.innerText === ""){
            empty= true;
        }
    })
    return empty;
}

const checkWinner= () => {
    for(let pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner is ", pos1);
                boxes.forEach((box) => {
                    box.disabled = true;
                });
                boxes[pattern[0]].style.backgroundColor = "#A7D477";
                boxes[pattern[1]].style.backgroundColor = "#A7D477";
                boxes[pattern[2]].style.backgroundColor = "#A7D477";

                if(pos1 == "X"){         
                    msgContainer.classList.remove("hide");
                    msg.innerText= "Congratulations!! Winner is Player X ";
                    resetBtn.classList.add("hide");
                }
                else {
                    msgContainer.classList.remove("hide");
                    msg.innerText= "Congratulations!! Winner is Player O ";
                    resetBtn.classList.add("hide");
                } 
                return;
            } 
        }
        if(!isBoxEmpty()){
            msgContainer.classList.remove("hide");
            msg.innerText= "Match Tied!!";
            resetBtn.classList.add("hide");
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("clicked");
        if (turnO){
            box.innerText= "O";
            turnO = false;
        }
        else{
            box.innerText= "X";
            turnO= true;
        }
        box.disabled= true;

        checkWinner();
    })
});

newBtn.addEventListener("click", ()=> {
    boxes.forEach((box) => {
        box.innerText= "";
        box.disabled= false;
        box.style.backgroundColor= "";
    })
    turnO= true;
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide");
})

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText= "";
        box.disabled= false;
    })
    turnO= true;
    msgContainer.classList.add("hide");
})