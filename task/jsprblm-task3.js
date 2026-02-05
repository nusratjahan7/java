// Your task is to calculate the total budget required to buy electronics: Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(numLaptop, numTablet, numMobile){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const total = (numLaptop * laptopPrice) + (numTablet * tabletPrice) + (numMobile * mobilePrice);
    return total;
}

const totalBudget = calculateElectronicsBudget(2, 3, 1);
console.log(totalBudget);