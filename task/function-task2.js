// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function checkNumber (number){
    if(number % 2 !== 0){
        let num = number * 2;
        return num;
    }
    else{
        let num = number / 2;
        return num;
    }
}

const check = checkNumber(5);
console.log(check);

const check2 = checkNumber(6);
console.log(check2);