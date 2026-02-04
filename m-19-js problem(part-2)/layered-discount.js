
/*
 * first 100 --> 100
 * 101 to 200 --> 90
 * above 200 --> 70
*/

function layerDiscountedTotal (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price =  70;
    
    if (quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainigQuantity = quantity - 100;
        const remainigTotal = remainigQuantity * second100Price;
        const total = first100Total + remainigTotal;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 90 * second100Price;
        const remainigQuantity = quantity - 200;
        const remainigTotal = remainigQuantity * above200Price;
        const total = first100Total + second100Total + remainigTotal;
        return total;
    }
}


const total = layerDiscountedTotal(201);
console.log(total);