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


var Instruments = ["Kazoo", "Banjo", "Bongos", "Triangle", "Accordian", "Cowbell"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function cat_pics() {
    let Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = 
    "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {
    const Vehicle = {make:"Honda", model:"Civic", color:"black"};
    Vehicle.model = "Accord";
    Vehicle.price = "$18,000";
    document.getElementById("Constant").innerHTML = "The price of the " + Vehicle.model + " was " + Vehicle.price + ".";
}