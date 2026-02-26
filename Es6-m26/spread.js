const max = Math.max(3, 5, 1, 5, 56, 3);
console.log(max);

const numbers = [2, 4, 5, 7, 8, 23, 46, 67];
const max2 = Math.max(...numbers);
console.log(max2);

const params = [45, 23, 56];
function sum (x, y, z){
    return x + y + z;
}
const result = sum(...params);
console.log(result);

// const array1 = [1, 2, 3];
// const array2 = array1;
// array2.push(4);
// console.log(array1);
// console.log(array2);

const array1 = [1, 2, 3];
const array2 = [...array1];
array2.push(4);
console.log(array1);
console.log(array2);

