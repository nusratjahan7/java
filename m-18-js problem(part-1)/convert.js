/*------------------ Inch to Feet --------------------- */

// 12 inch = 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

// ignore this one
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch' ;
    return result;
}

const zahidHeight = inchToFeet(75);
console.log(zahidHeight);

const zahidHeight2 = inchToFeet2(75);
console.log(zahidHeight2);


/*----------------- Miles to Kilometer --------------------- */

function millesToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
console.log(millesToKilometer(3));

function kilometerToMiles(kilo){
    const mile = kilo * 0.624371;
    return mile;
}
console.log(kilometerToMiles(4.82802));