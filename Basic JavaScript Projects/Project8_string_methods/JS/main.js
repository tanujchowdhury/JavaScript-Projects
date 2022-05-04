function full_Sentence() {
    var Part_1 = "My favorite animal ";
    var Part_2 = "is a tiger.";
    var Whole_sentence = Part_1.concat(Part_2);
    //.concat() is a method returns a concatenated string
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

function slice_Method() {
    var Sentence = "Take a break and drink some water.";
    var Section = Sentence.slice(28,33);
    //.slice() is a method that returns a specified section of a string.
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Case() {
    var Sentence = "Hello, how are you doing?";
    var Upper = Sentence.toUpperCase(); 
    //.toUpperCase() is a method that returns a string as all uppercase characters.
    document.getElementById("Upper").innerHTML = Upper;
}

function search_Method() {
    var Sentence = "Wool socks are the best Christmas present.";
    var Position = Sentence.search(/Christmas/);
    //.search() is a method that returns a position of a string in another string.
    document.getElementById("Position").innerHTML = Position;
}

function string_Method() {
    var X = 101;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
    //.toString() is a method that returns a number as a string.
}

function precision_Method() {
    var X = 553937.466424;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
    //.toPrecision() is method that returns a number as a string with a specified amount of digits.
}

function fix_Decimals() {
    var X = 617.02230
    document.getElementById("Fixed").innerHTML = X.toFixed(3);
    //.toFixed() is a method that returns a number as a string with a specified amount of digits after the decial point.
}

function primitive_Value() {
    var Sentence = "The 7 primitive data types in JavaScript are string, number, bigint, boolean, undefined, symbol, and null. A primitive is data that is not an object and has no methods."
    document.getElementById("Primitive").innerHTML = Sentence.valueOf();
    //.valueOf() is a method that returns a primitive value of a string.
}


