const mobiles = [
    {name: 'samsung', price: 40000, camera: '12mp', color: 'black'},
    {name: 'xiaomi', price: 18000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'iphone', price: 100000, camera: '12mp', color: 'black'},
    {name: 'walton', price: 9000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 250000, camera: '12mp', color: 'black'}
]

function getCheapestPhone(phones){
    let min = phones[0];
    for (const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(mobiles);
console.log('Cheapest phone is', cheap);