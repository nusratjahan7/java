const age = 20;
// if(age >= 18){
//     console.log('You can vote');
// }
// else {
//     console.log('Ghumai thako');
// }
// age >= 18 ? console.log('vote dio') : console.log('ghumai thako')


let price = 500;
const isleader = false;

if (isleader === true){
    price = 0;
}
else {
    price = price + 100;
}
// console.log(price)
price = isleader === true ? 0 : price + 100;

