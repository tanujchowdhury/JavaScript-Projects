//Create an object to keep track of values
const Calculator = {
    //Displays 0 on screen
    Display_Value: "0",
    //Hold first operand, set as null inititally
    First_Operand: null,
    //Checks if second operand has been input
    Wait_Second_Operand: false,
    //Hold operator, set as null initially
    operator: null
};

//This modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //Checking to see if Wait_Second_Operand is true
    //Set Display_Value to the key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
    //Overwrites Display_Value if its 0 or adds onto it
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}
//This handles decimal points
function Input_Decimal(dot) {
    //Prevents bugs from accidentally clicking the decimal point
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
    //If Display_Value does not contain a decimal point, it will add one
        Calculator.Display_Value += dot;
    }
}

//This handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //When an operator key is pressed, the number currently displayed on the screen will be stored in Calculator.First_Operand
    const Value_of_Input = parseFloat(Display_Value);
    //Check if an operator already exists and if Wait_Second_Operator is true, then updates the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//Checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //If operator exists, property lookup is performed for the operator in the Perform_Calculation object and the function that matches the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Add a fixed amount of numbers after the decimal        
        result = Number(result).toFixed(9)
        //Remove trailing zeros
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    "/" : (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*" : (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+" : (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-" : (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=" : (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//Updates screen with contents of Display_Value
function Update_Display() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}

Update_Display();
//This section monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    //The target variable is an object that represents the element that was clicked
    const { target } = event;
    //If the element that was clicked wasn't a button, exit the function
    if (!target.matches("button")) {
        return;
    }
    
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return
    }

    //Ensures AC clears the numbers from the calculator
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})