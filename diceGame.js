// Generating random images function
var box1Value = 0;
var box2Value = 0;
var time = 0;

function getRandomImages(boxClass) {
    var number = Math.floor(Math.random() * 6); 
    var imageSrc;
    if (number == 0) {
        imageSrc = "./one.png";
    } else if (number == 1) {
        imageSrc = "./two.png";
    } else if (number == 2) {
        imageSrc = "./three.png";
    } else if (number == 3) {
        imageSrc = "./four.png";
    } else if (number == 4) {
        imageSrc = "./five.png";
    } else if (number == 5) {
        imageSrc = "./six.png";
    }

    document.querySelector("." + boxClass + " img").src = imageSrc;

    if (boxClass === "box1") {
        box1Value = number;
    } else if (boxClass === "box2") {
        box2Value = number;
    }
}

function getWinner(box1Value, box2Value) {
    if (box1Value > box2Value) {
        alert("Player 1 is Winner");
    } else if (box1Value < box2Value) {
        alert("Player 2 is Winner");
    } else if (time != 0) {
        alert("Match Draw Between Player 1 and Player 2");
    }
    time++;
}

// Add event listeners to the buttons
document.querySelector(".btn1").addEventListener("click", function() {
    getRandomImages("box1");
});

document.querySelector(".btn2").addEventListener("click", function() {
    getRandomImages("box2");
    setTimeout(function() {
        getWinner(box1Value, box2Value);
    }, 800);
});