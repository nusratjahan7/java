// You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5, 6, 11, 12, 98, 5];

function countRepeat(numbers, find){
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] === find){
            count++;
        }
    }
    return count;
}

const find = countRepeat(numbers, 5);
console.log(find);
const find2 = countRepeat(numbers, 25);
console.log(find2);
