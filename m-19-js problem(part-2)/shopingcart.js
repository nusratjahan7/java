
const products = [
    {name: 'shampoo', price: 300, quantity: 2 },
    {name: 'chiruni', price: 100, quantity: 3 },
    {name: 'shirt', price: 700, quantity: 5 },
    {name: 'pant', price: 1200, quantity: 1 },
    {name: 'perfume', price: 1000, quantity:2}

]

function cartTotal (products){
    let total = 0;
    for (const product of products){
        const thisProductsCost = product.price * product.quantity;
        total = total + thisProductsCost;
    }   
    return total;
}
const shoppingCost = cartTotal(products);
console.log(shoppingCost);