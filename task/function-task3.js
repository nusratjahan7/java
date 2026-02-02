// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(arr, size){
    let sum = 0;
    for (let i = 0; i < size; i++){
        sum = sum + arr[i];
    }
    let average = sum / size;
    return average;
}

const numbers = [10, 20, 30, 40];
const result = make_avg(numbers, numbers.length);
console.log(result);