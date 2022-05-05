function Call_Loop() { //A while loop that counts to 10 on separate lines
    var Loop = "";
    var count = 1;
    while (count < 11) {
        Loop += "<br>" + count;
        count++;
    }
    document.getElementById("Loop").innerHTML = Loop;
}

function String_Length() { //The legnth property returns the total number of characters in a string
    var Sentence = "Don't count your chickens before they hatch.";
    var Length = Sentence.length;
    document.getElementById("Length").innerHTML = Length;
}


var Instruments = ["Kazoo", "Banjo", "Bongos", "Triangle", "Accordian", "Cowbell"]; //An array
var Content = "";
var Y;
function for_Loop() { //A function that iterates through an array and writes each element on a different line
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function cat_pics() { //A function that constructs an array and writes an element, in this case the element with an index of 2.
    let Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = 
    "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() { //A function that creates an object using the const declaration
    const Vehicle = {make:"Honda", model:"Civic", color:"black"};
    Vehicle.model = "Accord";
    Vehicle.price = "$18,000";
    document.getElementById("Constant").innerHTML = "The price of the " + Vehicle.model + " was " + Vehicle.price + ".";
}

let car = { //A function that creates an object, with one of the object's properties being a function itself
    make:"Dodge ",
    model:"Viper ",
    year:"2021 ",
    color:"red ",
    description: function() {
        return this.make + " " + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

function breakFunction() { //The break statement stops a loop at a specified iteration
    let break_statement = "";
    for (i = 0; i < 100; i++) {
        if (i === 4) {break;}
        break_statement += "i = " + i + "<br>";
    }
    document.getElementById("Break_text").innerHTML = break_statement
}

function contFunction() { //The continue statement skips a specified iteration in a loop
    let cont_statement = "";
    for (i = 0; i < 6; i++) {
        if (i === 2) {continue;}
        cont_statement += "i = " + i + "<br>";
    }
    document.getElementById("Cont_text").innerHTML = cont_statement
}