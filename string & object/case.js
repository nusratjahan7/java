const school = 'Ra juk Uttara Model School';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('i am reading book aibar xm a fataiya felmu');
}
else{
    console.log('hudai hudai');
}


const drink = 'water';
const liquid = ' water ';
if(drink.trim() === liquid.trim()){
    console.log('pani er opor nam');
}
else{
    console.log('somudrer pani kaite pari na');
}