function add(a, b) {
    return a + b;
};

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

let num1 = 10;
let operator = "-";
let num2 = 2;

function operate(op, a, b) {
    if(op === "+"){
        return add(a, b)
    } else if (op === "-"){
        return subtract(a, b)
    } else if (op === "*"){
        return multiply(a, b)
    } else if (op === "/"){
        return divide(a, b)
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
let equal = document.querySelector("#equal")

// DISPLAY

let display = document.querySelector("#display");
let para = document.querySelector('#display p');

let output = display.innerHTML = "0";

let btn = document.querySelector('#column button');

// BUTTON INPUTS

// --> numbers
one.addEventListener('click', () => {display.innerHTML += "1";});
two.addEventListener('click', () => {display.innerHTML += "2";});
three.addEventListener('click', () => {display.innerHTML += "3";});
four.addEventListener('click', () => {display.innerHTML += "4";});
five.addEventListener('click', () => {display.innerHTML += "5";});
six.addEventListener('click', () => {display.innerHTML += "6";});
seven.addEventListener('click', () => {display.innerHTML += "7";});
eight.addEventListener('click', () => {display.innerHTML += "8";});
nine.addEventListener('click', () => {display.innerHTML += "9";});
zero.addEventListener('click', () => {display.innerHTML += "0";});

// --> clear
clear.addEventListener('click', () => {display.innerHTML = ""; arr.splice(0, arr.length)});
aClear.addEventListener('click', () => {display.innerHTML = ""; arr.splice(0, arr.length)});


// Array
 let arr = []

// --> Operators

plus.addEventListener('click', () => {
arr.push(display.innerHTML);
operator = "+";
display.innerHTML = "";


});

minus.addEventListener('click', () => {
    arr.push(display.innerHTML);
    operator = "-";
    display.innerHTML = "";
});

times.addEventListener('click', () => {
    arr.push(display.innerHTML);
    operator = "*";
    display.innerHTML = "";
});

division.addEventListener('click', () => {
    arr.push(display.innerHTML);
    operator = "/";
    display.innerHTML = "";
});



// --> Output

equal.addEventListener('click', () => {

    let length = arr.length

    arr.push(display.innerHTML);
    console.log(arr);

    arr = arr.reduce( (acc, index ) => acc.concat(+index), []);
   
   

    // Does nothing if only one number was entered.
    if (arr.length === 1) {
        return
    } 
        result = Math.round((operate(operator, arr[0], arr[1]) * 100) / 100);
        display.innerHTML = result;

        if (arr[1] === 0) {
            display.innerHTML = "Chop Rice";
        }
        
    if (arr.length > 2) {
        display.innerHTML =  operate(operator, result, arr[2]);
        console.log(arr);
    }
    arr.splice(0, arr.length);
})


