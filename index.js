var numSquares = 6;
var colors = [];
var chosenColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
let rBtn  = document.getElementById('r')
let gBtn = document.getElementById('g')
let bBtn = document.getElementById('b')


game();

function game() {
    modeFunctionality();
    setupSquares();
    newGame();
};

resetButton.addEventListener("click", function() {
    newGame();
});

function modeFunctionality() {
    for (i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            newGame();
        });
    }
}

function setupSquares() {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor === chosenColor) {
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try again!"
            }
        });
    }
}

function newGame() {
    colors = generateRandomColors(numSquares);
    chosenColor = pickColor();
    colorDisplay.textContent = chosenColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";

    for (i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue"
}

function changeColors(color) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num) {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}




