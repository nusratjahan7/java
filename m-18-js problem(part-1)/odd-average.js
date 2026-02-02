/* 
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
*/

/* 
 * 1. put odd numbers in an array
*/

function oddAverage(numbers){
    const odds = [];
    for( const number of numbers){
       if(number % 2 !== 0){
        odds.push(number);
       }
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
   const avg = sum / count;
   return avg;
}
const numbers = [42, 13, 58, 65, 81, 96, 7, 105];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ', avg); 