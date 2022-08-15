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

const displayNumber = function (number){
    displayValue.innerHTML += number;

}

const displayOperator = function(op) {
    displayValue.innerHTML += (" " + op + " ");
    
}
const clearBtn = document.querySelector(".clear");
const clear = function () {
    displayValue.innerHTML = "";
}

operators.forEach(element => {
    element.addEventListener('click', (e) => {
        let value = element.innerHTML;
        displayOperator(value);
    })
})

btnPress.forEach(element => {
    element.addEventListener('click', (event) => {
        let value = parseFloat(element.innerHTML);
        displayNumber(value);
    });
});

clearBtn.addEventListener('click', (e) => {
    clear();
})
