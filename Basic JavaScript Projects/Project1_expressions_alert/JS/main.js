window.alert("Hello, World!"); //Display a message in an alert box
document.write("Hello, World! "); //Display a message in the HTML body
var A = 'Animals. '; //Assign a string to a variable
A.fontcolor("red");
document.write(A); 
var B = 'My name is ' + 'Tanuj. '; //Assign a concatendated string to a variable
document.write(B);
var C = 'My favorite animal is a ', D = 'dog', E = '. ';
document.write(C + D + E); //Display a concatendated string in the HTML body

function My_First_Function () { //Defining a function and naming it
    var str = "This is the button text!"; //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}