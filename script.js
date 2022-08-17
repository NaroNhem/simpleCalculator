const add = function(a,b){
    const sum = a + b;
    return sum;
}

const subtract = function(a,b){
    const sum = a-b;
    return sum;
}

const multiply = function(a,b) {
    const sum = a*b;
    return sum;
}

const divide = function(a,b) {
    const sum = a / b;
    return sum;
}

const operator = function(symbol,a, b) {
    return symbol(a,b);
}

var displayValue = document.getElementById("display");

const operators = document.querySelectorAll(".operators");

const btnPress = document.querySelectorAll('.button');

const clearBtn = document.querySelector(".clear");

const equals = document.querySelector(".equal");

const aClear = document.querySelector(".aClear");


let values = [];
let opArr = [];
const backSpace = function () {
    displayValue.innerHTML = displayValue.innerHTML.substring(0, displayValue.innerHTML.length - 1)
};

const displayNumber = function (number){
    displayValue.innerHTML += number;

}

const displayOperator = function(op) {
    displayValue.innerHTML += (" " + op + " ");
    
}

const clear = function () {
    displayValue.innerHTML = "";
}

const equal = function(array, operator) {
    for(let i = 0; i < array.length; i ++) {

    }
}

let opSymbol = operators.forEach(element => {
    element.addEventListener('click', (e) => {
        let value = element.innerHTML;
        displayOperator(value);
        opArr.push(value);
    })
})

btnPress.forEach(element => {
    element.addEventListener('click', (event) => {
        let value = parseFloat(element.innerHTML);
        displayNumber(value);
        console.log(displayValue.innerHTML)
    });
});

clearBtn.addEventListener('click', (e) => {
    backSpace();
    values.pop();
    opArr.pop();
})

aClear.addEventListener('click', (e) => {
    clear();
    opArr = [];
    values = [];
})

equals.addEventListener('click', (e) => {
    let extractNum = displayValue.innerHTML.match(/\d+/g);
    extractNum.forEach(item => values.push(parseFloat(item)));
    switch (opArr[0]) {
        case '+':
            displayValue.innerHTML = add(values[0],values[1]);
            break;
        case '-':
            displayValue.innerHTML = subtract(values[0],values[1]);
            break;
        case '/':
            displayValue.innerHTML = divide(values[0], values[1]);
            break;
        case '*':
            displayValue.innerHTML = multiply(values[0],values[1]);
            break;
    }
})