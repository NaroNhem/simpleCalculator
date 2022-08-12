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

displayValue.innerHTML = 19;

