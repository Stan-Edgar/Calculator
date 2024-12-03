function add(a, b) {
    return a + b;
}

// console.log(add(1, 2))

function subtract(a, b) {
    return a - b;
}

// console.log(subtract(2, 1))

function multiply(a, b) {
    return a * b;
}

// console.log(multiply(5, 2))

function divide(a, b) {
    return a / b;
}

// console.log(divide(10, 2))

let expression = null;
let num1 = 10;
let operator = "-";
let num2 = 2;

function operate(op, num1, num2) {
    if(op === "+"){
        return add(num1, num2)
    } else if (op === "-"){
        return subtract(num1, num2)
    } else if (op === "*"){
        return multiply(num1, num2)
    } else if (op === "/"){
        return divide(num1, num2)
    } else {
        console.log("Error: Invalid Operator")
    }
}

// console.log(operate(operator, num1, num2 ))


// NUMBERS  
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");

// OPERATORS
let plus = document.querySelector("#add");
let minus = document.querySelector('#subtract');
let times = document.querySelector('#multiply');
let division = document.querySelector('#divide');

// SPECIAL

let clear = document.querySelector('#clear');
let aClear = document.querySelector('#aClear')

// DISPLAY

let display = document.querySelector("#display");
let para = document.querySelector('#display p');
display.textContent = "0";

// BUTTON INPUTS

// --> numbers
one.addEventListener('click', () => {display.textContent += "1";});
two.addEventListener('click', () => {display.textContent += "2";});
three.addEventListener('click', () => {display.textContent += "3";});
four.addEventListener('click', () => {display.textContent += "4";});
five.addEventListener('click', () => {display.textContent += "5";});
six.addEventListener('click', () => {display.textContent += "6";});
seven.addEventListener('click', () => {display.textContent += "7";});
eight.addEventListener('click', () => {display.textContent += "8";});
nine.addEventListener('click', () => {display.textContent += "9";});
zero.addEventListener('click', () => {display.textContent += "0";});

// --> clear
clear.addEventListener('click', () => {display.textContent = ""});
aClear.addEventListener('click', () => {display.textContent = "";});



