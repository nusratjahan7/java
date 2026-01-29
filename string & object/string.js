const country = 'Bangladesh';
 const division = "NewKhale";
 const district = `B-Baria`;
//  const thana = new String('Demra');


/* array is mutable */
const numbers = [23, 34 , 45, 56, 65];
console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[1]);
numbers[1] = 44;
console.log(numbers);


/* string is immutable */
const capital = 'Dhaka';
// console.log(capital.length); //word koyta space niyeche ta dekhay
// console.log(capital[1]);
console.log(capital);
capital[1] = 'F'; //string change hoy na
console.log(capital);

