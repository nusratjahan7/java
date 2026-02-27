function outerFunction(){
    function innerFunction(){
        console.log('This is the inner function');
    }
    return innerFunction;
}

const output = outerFunction();
// console.log(output);

function counter(owner){
    let count = 0 ;
    function increment(){
        count = count + 1;
        console.log('value of count', owner, count);
    }
    return increment;
}
const rahimCounter = counter('Rahim');
rahimCounter();
// const count1 = counter();
// count1();
// count1();