// Capitalize Every first Letter of each word in a String


let str = "capitalize every first Letter of each word";
let words = str.split(" ");
let result = [];

for (let i = 0; i < words.length; i++){
    result.push(words[i][0].toLocaleUpperCase() + words[i].slice(1));
}
 console.log(result.join(" "));


