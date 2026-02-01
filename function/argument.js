function doubleIt (number){
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log('I will call the function'); 
doubleIt(15);
console.log('-------------');
doubleIt(24);
console.log('-------------');
doubleIt(873);
console.log('-------------');
const number = 55;
doubleIt(number);
console.log('-------------');
const money = 112;
doubleIt(money);
console.log('-------------');

//
function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'differece is:', diff);
}
const fatherAge = 40;
const myAge = 10;
difference(fatherAge, myAge);