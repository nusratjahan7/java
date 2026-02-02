/*
* Simple logic
* Year will be a leap year if the year is divisible by 4
*/

function isLeapYear (year){
    if (year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const leapYear = isLeapYear(2028);
console.log(leapYear);


/*
 * 1. Those year that not divisible by 100 and if the year is divisible by 4: then it will be a leap year. 
 * 2. if the year is divisible bt 400, then it is a leap year
*/

function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isleap = isLeapYear2(2100);
const isleap2 = isLeapYear2(2400);
const isleap3 = isLeapYear2(2052);
console.log(isleap, isleap2, isleap3);
