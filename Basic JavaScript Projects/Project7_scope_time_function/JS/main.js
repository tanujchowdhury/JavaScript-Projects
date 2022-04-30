var X = 10; //Assiged a global variable
function double_it() {
    var Y = 2; //Assigned a local varialbe
    console.log(X * Y);
    return X * Y;
    
}
function quadruple_it() { //This function will show an error in the console
    console.log(X * Y);
    return X * Y^2; //Y is not definined in this function
    
}

function work_hours() { //A function with an if statement
    if (new Date().getHours() >= 17) { //Time function
    document.getElementById("Message").innerHTML = "Time to go home!";
    }
}


function compare_numbers() { //A function with if, else if, and else statements
    var x = document.getElementById("number_1").value;
    var y = document.getElementById("number_2").value;
    if (x > y) {
        comparison = "The first number is greater than the second number.";
    }
    else if (x < y) {
        comparison = "The second number is greater than the first number.";
    }
    else {
        comparison = "The two numbers are equal.";
    }
    document.getElementById("Comparison").innerHTML = comparison;
}
