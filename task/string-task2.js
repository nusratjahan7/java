//Count how many times a string has the letter a or A

let str = "Java is Amazing Aaa";
let count = 0;

for (let i = 0; i <= str.length; i++){
    if (str[i] === "a" || str[i] === "A" ){
        count++;
    }
}
console.log(count);