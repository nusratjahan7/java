const persons = ['rakib', 'nokib', 'akib', 'dakib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

//sort -->
// const numbers = [2, 6, 8, 4, 1, 3, 9]
/*
Ascending ---> Smaller to Larger: [1, 2, 3, 4, 6, 8, 9]
Descending ---> Larger to Smaller: [9, 9, 6, 4, 3, 2, 1]
*/
const numbers = [2, 46, 88, 4, 1, 39, 9, 20, 7]
// const numbers_asc = numbers.sort(); //not working
const numbers_asc = [...numbers].sort(function(a, b) { return a - b});
const numbers_dsc = [...numbers].sort(function(a, b) { return b - a});
console.log(numbers_asc);
console.log(numbers_dsc);