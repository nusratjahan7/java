// Write a function to find the longest word in a given string.

function findLongestWord(str){
    let word = str.split(" ");
    let longest = word[0];
    for (let i = 1; i < word.length; i++){
        if (word[i].length > longest.length){
            longest = word[i];
        }
    }
    return longest;
}

const longestWord = findLongestWord('I am learning Programming to become a programmer');
console.log('The longest word is:', longestWord);