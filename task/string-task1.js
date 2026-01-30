//Count how many times a string has the letter a

let str = "java is amazing";
let count = 0;

for (let i = 0; i <= str.length; i++){
    if (str[i] === "a"){
        count++;
    }
}
console.log(count);