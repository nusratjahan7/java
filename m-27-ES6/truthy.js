let data;
data = 0;
data = '';
data = '0';
data = ' ';
if (data){
    console.log('Truthy');
}
else {
    console.log('Falsy');
} 

let price = true;
if (!price){
    console.log('price is falsy');
}

let value = 0;
if (!!value){
    console.log('Truthy');
}