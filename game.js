let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");

// Accessed all buttons that the user can press

 turn = "x";
 count=0;
 const mediaQuery = window.matchMedia("(max-width: 1500px)");

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

 reset.addEventListener("click", () => {
      //sare box ke inner text ko empty karo
      for(let box of boxes){
        box.textContent = "";
        box.disabled=false;
        box.style.boxShadow="5px 5px 10px rgba(0,0,0,0.5)";
      }

      //game box ki position vapas center m kr do
      hideWinner();
      count = 0;


 })

 newGame.addEventListener("click", () => {
  //sare box ke inner text ko empty karo
  for(let box of boxes){
    box.textContent = "";
    box.disabled=false;
    box.style.boxShadow="5px 5px 10px rgba(0,0,0,0.5)";
  }

  //game box ki position vapas center m kr do
  hideWinner();
  count=0;


})

 
 const hideWinner = () => {
  var gameBox = document.querySelector(".game");

  
  
  if (gameBox) { // Check if gameBox exists
      gameBox.style.position = "relative"; // Ensure the position is relative
      
      // Set the initial left position if needed
      gameBox.style.left = "0"; // Optional: Set it to the initial position if not already set
      
      // Change the left position to animate it
      setTimeout(() => {
          gameBox.style.left = "auto"; // Move the box to the left
      }, 0); // Use a timeout to ensure the transition applies
  } else {
    console.error("Element with class 'game' not found.");
  }

  var message=document.querySelector(".msg");
    message.textContent =   "";
  message.style.display = "none";
  setTimeout(() => {
      message.style.opacity = 0; // Slowly fade in the message
  }, 100);

  
}

 const showDraw =  () => {
  var gameBox = document.querySelector(".game");
    
  if (!mediaQuery.matches) { 
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
  }

    var message=document.querySelector(".msg");
      message.textContent =   "Game Draw ";
    message.style.display = "flex";
    setTimeout(() => {
        message.style.opacity = 1; // Slowly fade in the message
    }, 100);

    
    
  }
  
 
 const showWinner = (winner,a,b,c) => {
    var gameBox = document.querySelector(".game");
    if (!mediaQuery.matches) { 
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
  }
  
    var message=document.querySelector(".msg");
      message.textContent =   "Congratulations "+ winner +" Is Winner  ";
    message.style.display = "flex";
    setTimeout(() => {
        message.style.opacity = 1; // Slowly fade in the message
    }, 100);

    disableAll();
    boxes[a].style.boxShadow = "0 0 20px rgba(255, 255, 224,0.8), 0 0 40px rgba(255, 255, 224,0.6), 0 0 60px rgba(255, 255, 224,0.4)";
    boxes[b].style.boxShadow = "0 0 20px rgba(255, 255, 224,0.8), 0 0 40px rgba(255, 255, 224,0.6), 0 0 60px rgba(255, 255, 224,0.4)";
    boxes[c].style.boxShadow = "0 0 20px rgba(255, 255, 224,0.8), 0 0 40px rgba(255, 255, 224,0.6), 0 0 60px rgba(255, 255, 224,0.4)";
  }
  

 const checkWinner = () =>{
    for(let pattern of winnerPatterns ){
     let pos1 = boxes[pattern[0]].textContent;   
     let pos2 = boxes[pattern[1]].textContent; 
     let pos3 = boxes[pattern[2]].textContent;
     
     if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            showWinner(pos1,pattern[0],pattern[1],pattern[2]);
            return true;
        }
     }

     if(count===9){
      showDraw();
      return false;
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
    count++;
    checkWinner();
  });
});

const disableAll = () => {
for(let box of boxes){
  box.disabled=true;
}

}
