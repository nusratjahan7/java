//Check whether a string contains all the vowels a, e, i, o, u

let str = "Education";
str = str.toLowerCase();

let vowels =['a', 'e', 'i', 'o', 'u'];
let hasVowels = true;

for (let v of vowels){
    if (!str.includes(v)){
        hasVowels = false;  
        break;   
    }
}
console.log(hasVowels);