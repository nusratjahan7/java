// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];

function getMin(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

const lowest = getMin(heights2);
console.log(lowest);