/****  odd  ****/
let num = 61;
while (num <=100){
    if (num % 2 !== 0){
        console.log(num);
    }
    num++;
}

/*********  even  **********/

let n = 78;
while (n <= 98){
    if (n % 2 === 0){
        console.log(n);
    }
    n++;
}

/*** odd sum *****/

let odd = 81;
let sum = 0;
while (odd <= 131){
    if (odd % 2 !== 0){
        sum += odd;
    }
    odd++;
}
console.log("Sum of odd numbers from 81 to 131 is:", sum);

/*** even sum ***/

let even = 206;
let total = 0;
while (even <= 331){
    if (even % 2 === 0){
        total += even;
    }
    even++;
}
console.log("Total of even numbers from 206 to 331 is:", total)