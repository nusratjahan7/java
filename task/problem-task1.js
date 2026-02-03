// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];

let lowest = heights2[0];

for (let i = 1; i < heights2.length; i++){
    if (heights2[i] < lowest){
        lowest = heights2[i];
    }
}

console.log(lowest);