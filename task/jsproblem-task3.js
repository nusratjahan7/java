// Write a function to count the number of vowels in a string.

function countVowels(str){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

const count = countVowels('Education');
console.log(count);