document.write(typeof "Tanuj Chowdhury") //typepf operator will display data type
document.write("12" + 5) //expression with a string and number
function not_a_number() { //returns a boolean, uses isNaN
    document.getElementById("Test").innerHTML = isNaN(5);
}
document.write(-2E310); //-Infinity
document.write(5>2); //true
console.log(2>5); //false in the console log
document.write(10 == 5 + 5); //true
document.write(10 === 10); //true
document.write(10 === "eleven"); //false
document.write(10 === "10"); //false
document.write(10 === 11); //false
document.write(5>2 && 10>4); //true
document.write(5>2 && 10<4); //false
document.write(5>2 || 10<4); //true
document.write(5<2 || 10<4); //false
document.write(!(5<2)) //true
