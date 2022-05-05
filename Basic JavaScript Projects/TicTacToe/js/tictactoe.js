//This variable keeps track of whose turns it is
let activePlayer = "X";
//This array stores an array of moves. Use this to determine win cons
let selectedSquares = [];

//This function places X or O into squares
function placeXOrO(squareNumber) {
    //The following condition is to make a square can't be selected more than once
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id of the square that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks whose turn it is
        if (activePlayer === "X") {
            //If the active player is X, X will be placed in the square
            select.style.backgroundImage = "url('images/x.png')";
            //If the active player isn't X, O is playing and O is placed in the square
        } else {
            select.style.backgroundImage = "url('images/o.png')";
        }
        //squareNumber and activePlayer are concatenated together and added to an array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls the function to check for win cons
        checkWinConditions();
        //This condition changes the active player. If X is playing, it's changed to O and vice versa
        if (activePlayer === "X") {
            activePlayer = "O";
        } else {
            activePlayer = "X";
        }

        //This function plays the placement sound
        audio("./media/place.mp3");
        //This condition checks to see if it is computers turn.
        if (activePlayer === "O") {
            //This function disables clikcing for the computer choice
            disableClick();
            //This function waits 1 sec before computer moves
            setTimeout(function() { computersTurn(); }, 1000)
        }
        //Returning true is need for computersTurn() function to work
        return true;
    }
    //This function results in a random square being selected
    function computersTurn() {
        //This boolean is needed for our while loop
        let success = false;
        //This varaible stores a random number from 1-8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already
        while(!success) {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square has not been selected yet
            if (placeXOrO(pickASquare)) {
                //This calls the function
                placeXOrO(pickASquare);
                //This changes the boolean and ends the while loop
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win cons
//drawWinLine function is called to draw the line to denote victory
function checkWinConditions() {
    //[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], and [2,4,6] are all possible win cons
    //Win cons for X
    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. It executes if none of the above conditions are met and 9 squares are selected
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound
        audio("./media/tie.mp3");
        //This function sets a .3 second timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }

    //This function checks if an array includes 3 strings. Used to check for each win con
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //If the 3 varaibles we pass are all included in our array, true is returned, 
        ///and our else if condition executes the drawWinLine function
        if (a ===  true && b === true && c === true) { return true }
    }
}


//This function makes our body element temporarily unclickable
function disableClick() {
    //This makes our body unclickable
    body.style.pointerEvents = "none";
    //This makes our body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = "auto";}, 1000);
}

//This function takes a string parameter of the path you set earlier for the placement sound
function audio(audioURL) {
    //Create an audio object and pass the file path as the parameter
    let audio = new Audio(audioURL);
    //Play method plays the audio sound
    audio.play();
}

//This function uses HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines")
    const c = canvas.getContext("2d");
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    //This function interacts with the canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70, 255, 33, 0.8)";
        c.stroke();
        //This condition checks if we've reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //Similar to the condition above, for the [2, 4, 6] win con
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //This function clears the canvas after the line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio("./media/winGame.mp3");
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//This function resets the game in the event of a tie or a win
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ""
    }
    selectedSquares = [];
}


