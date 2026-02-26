// console.log("hello from out side");
// console.log(document);

const sections = document.querySelectorAll('section');

// for (const section of sections){
//     console.log(section);
//     section.style.backgroundColor = 'lightblue';
//     section.style.border = '2px solid blue';
//     section.style.marginBottom = '10px';
//     section.style.padding = '10px';
// }

for (const section of sections){
    section.classList.add('section-card');
}

// createElement
const newChild = document.createElement('li');
newChild.innerHTML = 'New born baby footballer';
const playerList = document.getElementById('player-list');
playerList.appendChild(newChild);


// Append

// 1. parent node
const mainContainer = document.getElementById('main-contaianer');

// 2. create child node
const placesSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);

const ul = document.createElement('ul');
const li1 =  document.createElement('li');
li1.innerText = 'bandorban';
ul.appendChild(li1);

const li2 =  document.createElement('li');
li2.innerText = 'sundorban';
ul.appendChild(li2);

placesSection.appendChild(ul);

// 3. append placesSection to the main mainContainer
mainContainer.append(placesSection);



/* EASIER TO CREATE HTML */

const bookSection = document.createElement('section');

bookSection.innerHTML = `
<h1> Books I Want to Read </h1>
<ul>
    <li>Physics</li>
    <li>Chemistry</li>
    <li>Math</li>
</ul>
`
mainContainer.appendChild(bookSection);