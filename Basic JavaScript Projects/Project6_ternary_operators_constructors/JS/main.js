function Ride_Function() { //An example function that uses ternary operators
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
    }

function Vote_Function() {//A function that I wrote that uses ternanry operators. Used the above example as a reference.
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
    }

function Vehicle(Make, Model, Year, Color) { //An example of a constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //Displays data from the variable Erik
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + " " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

function Course(Name, Subject, Year, Quarter) { //A function that I wrote with a constructor
    this.Course_Name = Name;
    this.Course_Subject = Subject;
    this.Course_Year = Year;
    this.Course_Quarter = Quarter;
}
var Dillon = new Course("Linear Algebra", "Mathematics", 2013, "Fall");
function newStudent() { //Displays the result of the constructor function on the webpage
    document.getElementById("New_and_This").innerHTML = Dillon.Course_Year
}

function hardMath() { //A nested function that does 3 times 2 and displays 6 to the page
    document.getElementById("Nested_Function").innerHTML = Answer();
    function Answer() {
        var start = 3;
        function Double_it() {start = start * 2;}
        Double_it();
        return start
    }
}