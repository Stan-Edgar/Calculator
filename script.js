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

console.log(operate(operator, num1, num2 ))