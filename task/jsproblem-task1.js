// Write a function to convert temperature from Celsius to Fahrenheit.


function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const fahrenheit = celsiusToFahrenheit(0);
console.log(fahrenheit);
const fahrenheit2 = celsiusToFahrenheit(25);
console.log(fahrenheit2);