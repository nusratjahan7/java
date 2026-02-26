
// function declaration
function add (num1, num2){
    return num1 + num2;
}

// function expression
const add2 = function(num1, num2){
    return num1 + num2;
}
console.log(add2(10, 20));

// arrow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(10, 20));

const multiply = (a, b) => a * b;
const tenTime = x => x * 10;
const getPi = () => 3.1416;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

document.getElementById('btn').addEventListener('click', (event) = {});