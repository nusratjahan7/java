const firstName = 'Kamruzzaman';
const lastName = "Shuvo";

const aboutMe = `My name is ${firstName}`;
console.log(aboutMe);
const giveMe = `give me ${10+10*(10+2)}`;
console.log(giveMe);

function getCardHtml(name, description, price){
    const div = `
    <div class="card">
        <h2>${name.toUpperCase()}</h2>
        <p>Price: $${price}</p>
        <p>${description}</p>
    </div>
    `
    console.log(div);
}
getCardHtml('iphone 12', 'This is the latest iphone model', 999);