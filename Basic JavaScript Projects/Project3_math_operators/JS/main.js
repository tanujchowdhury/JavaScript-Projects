function add_two_numbers() { //Function for adding two numbers and displaying the result
    var math_result = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + math_result;   
}

function subtract_two_numbers() { //Function for subtracting two numbers and displaying the result
    var math_result = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + math_result;
}

function multiply_two_numbers() { //Function for multiplying two numbers and displaying the result
    var math_result = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + math_result;
}

function divide_two_numbers() { //Function for dividing two numbers and displaying the result
    var math_result = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + math_result;
}

function four_function() { //Function that contains all four math operations and displays the results    var math_result = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and subtracted by 5 equals " + math_result;
}

function remainder_function() { //Function that uses the modular function and displays the result
    var math_result = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of " + math_result;
}

function negate_function() {
    var math_result = 10;
    document.getElementById("Math").innerHTML = "10 times -1 is " + -math_result;
}

function increment_function() {
    var X = 5;
    X++; //Increment operator
    document.write("X = " + X);
}

function decrement_function() {
    var Y = 5.25;
    Y--; //Decrement operator
    document.write(Y);
}

function rand_number() {
    var Z = Math.random(); //Random number between 0 and 1
    document.write(Z);
}

