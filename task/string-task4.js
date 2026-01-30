// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let str = "Mx Eyam is Tomorrow. Eyam short form Ym.";

let result = " ";
 for (let i = 0; i <= str.length; i++){
    if (str[i] === 'x'){
        result += 'y';
    }
    else if (str[i] === 'y'){
        result += 'x';
    }    
    else if (str[i] == "Y"){
        result += 'X';
    }
    else{
        result += str[i];
    }
 }
 console.log(result);