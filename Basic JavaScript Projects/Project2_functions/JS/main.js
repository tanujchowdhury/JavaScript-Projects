function my_Function () {
    var str_button = "This is the button text."; //Assigns a string for button text to a variable
    var str_header = "This is the header text."; //Assigns a string for header text to a variable
    document.getElementById("Button_Text").innerHTML = str_button; //Displays the button text when the button is clicked
    document.getElementById("Header_Text").innerHTML = str_header; //Displays the header text when the button is clicked
}

function myFunction () {
    var sentence = "I am learning"; //Assigns a string to a variable
    sentence += " a lot from this book!"; //Concatenates the string
    document.getElementById("Concatenate").innerHTML = sentence; //Displays the variable when the button is clicked
}