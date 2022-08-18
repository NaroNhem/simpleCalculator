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
    displayValue.innerHTML = op;
    
}

const clear = function () {
    displayValue.innerHTML = "";
}

const equal = function(array, operator) {
    for(let i = 0; i < array.length; i ++) {

    }
}
const compute = function (a,b) {
    switch (opArr[0]) {
        case '+':
            displayValue.innerHTML = add(a,b);
            empty();
            break;
        case '-':
            displayValue.innerHTML = subtract(a,b);
            empty();
            break;
        case '/':
            displayValue.innerHTML = divide(a,b);
            empty();
            break;
        case '*':
            displayValue.innerHTML = multiply(a,b);
            empty();
            break;
    }
};
let opSymbol = operators.forEach(element => {
    element.addEventListener('click', (e) => {
        values.push(parseFloat(displayValue.innerHTML));
        let value = element.innerHTML;
        displayOperator(value);
        opArr.push(value);
        if (values.length > 1){
            compute(values[0],values[1]);
            values.push(parseFloat(displayValue.innerHTML));
            opArr.push(value)
        }
    })
})

btnPress.forEach(element => {
    element.addEventListener('click', (event) => {
        let value = parseFloat(element.innerHTML);
        if (displayValue.innerHTML == "-" ||displayValue.innerHTML == "+" ||displayValue.innerHTML == "*" ||displayValue.innerHTML == "/"){
            displayValue.innerHTML = "";
        }
        if (values[0] == parseFloat(displayValue.innerHTML)) {
            displayValue.innerHTML = "";
        } 
        displayNumber(value);
    });
});
const empty = function() {
    opArr = [];
    values = [];
}
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
    // let extractNum = displayValue.innerHTML.match(/\d+/g);
    if(values.length < 2) {
        values.push(parseFloat(displayValue.innerHTML));
        compute(values[0],parseFloat(displayValue.innerHTML));
    }
    compute(values[0],values[1]);
})