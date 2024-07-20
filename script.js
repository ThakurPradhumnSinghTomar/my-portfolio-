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
            <p class="nameOfProject">Movie Ranking</p>     
        </div>
        <div class="projectImage" id="project3Image">
            <img src ="./previewmovie.jpg">
        </div>
        <a href="./movieranking.html" class="button">View</a>
    </div>
    `;
}

document.querySelector("#projectButton").addEventListener("click", function() {
    projects();
});
