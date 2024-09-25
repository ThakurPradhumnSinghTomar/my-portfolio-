function projects() {
    document.getElementById('projects').innerHTML = `
    <h1>Projects</h1>
    
    <div class="project" id="project1">
        <div class="projectName" id="project1Name">
            <p class="nameOfProject">Pricing Cards</p>     
        </div>
        <div class="projectImage" id="project1Image">
            <img src ="./project3preview.jpg">
        </div>
        <a href = "./project3.html" class="button">View</a>
    </div>
    
    <div class="project" id="project2">
        <div class="projectName" id="project2Name">
            <p class="nameOfProject">Role The Dice</p>     
        </div>
        <div class="projectImage" id="project2Image">
            <img src ="./diceGame.jpg">
        </div>
        <a href="./diceGame.html" class="button">View</a>
    </div>
    
    <div class="project" id="project3">
        <div class="projectName" id="project3Name">
            <p class="nameOfProject">Netflix Page</p>     
        </div>
        <div class="projectImage" id="project3Image">
            <img src ="./netflixPreview.jpg">
        </div>
        <a href="./netflix.html" class="button">View</a>
    </div>

     <div class="project" id="project4">
        <div class="projectName" id="project4Name">
            <p class="nameOfProject">Tic Tac Toe Game</p>     
        </div>
        <div class="projectImage" id="project4Image">
            <img src ="project4.png">
        </div>
        <a href="./TicTacToe.html" class="button">View</a>
    </div>


       
    



    `;
}

document.querySelector("#projectButton").addEventListener("click", function() {
    projects();
});

document.getElementById("projectButton").addEventListener("click",function(){

document.getElementById("projects").scrollIntoView({behavior: "smooth"});

});
