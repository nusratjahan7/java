const mobiles = [
    {name: 'samsung', price: 40000, camera: '12mp', color: 'black'},
    {name: 'xiaomi', price: 18000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'iphone', price: 100000, camera: '12mp', color: 'black'},
    {name: 'walton', price: 9000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 25000, camera: '12mp', color: 'black'}
]

function getExpensivePhone(phones){
    let max = phones[0];
    for (const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const expensive = getExpensivePhone(mobiles);
console.log('Expensive phone is', expensive);