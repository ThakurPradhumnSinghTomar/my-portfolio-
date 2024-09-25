let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");

// Accessed all buttons that the user can press

 turn = "x";

 winnerPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ]

 const showWinner = (winner) => {
    var gameBox = document.querySelector(".game");
    
    if (gameBox) { // Check if gameBox exists
        gameBox.style.position = "relative"; // Ensure the position is relative
        
        // Set the initial left position if needed
        gameBox.style.left = "0"; // Optional: Set it to the initial position if not already set
        
        // Change the left position to animate it
        setTimeout(() => {
            gameBox.style.left = "-180px"; // Move the box to the left
        }, 0); // Use a timeout to ensure the transition applies
    } else {
      console.error("Element with class 'game' not found.");
    }

    var message=document.querySelector(".msg");
      message.textContent =   "Congratulations "+ winner +" Is Winner  ";
    message.style.display = "flex";
    setTimeout(() => {
        message.style.opacity = 1; // Slowly fade in the message
    }, 100);
  }
  

 const checkWinner = () =>{
    for(let pattern of winnerPatterns ){
     let pos1 = boxes[pattern[0]].textContent;   
     let pos2 = boxes[pattern[1]].textContent; 
     let pos3 = boxes[pattern[2]].textContent;
     
     if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            showWinner(pos1);
            return true;
        }
     }
    }
    return false;

 }

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turn=="x"){
        box.textContent = "X";
        turn = "o";
    }
    else{
        box.textContent = "O";
        turn="x";
    }

    box.disabled=true;
    checkWinner();
  });
});
