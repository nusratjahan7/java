const numbers = [65, 66, 68, 72, 78, 60, 6];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(min > num){
            min = num;
        }
    }
    return min;
}

const min = getMin(numbers);
console.log('min value is', min);