// const listItems = document.getElementsByClassName('list-item');

// for(const listItem of listItems){
//     // console.log(listItem);
// }

// const mainDiv = document.querySelector('#main-div');
// // console.log(mainDiv.children[0].innerHTML);

// const img = document.querySelector('img');
// // console.log(img);
// img.setAttribute('alt', 'updated.jpg');

const listItems = document.getElementsByClassName('list-item');

for(let list of listItems){
    list.style.color = 'red';
}

const button = document.getElementById('btn');
const countText = document.getElementById('count');
button.addEventListener('click', function(){
    let currentCount = parseInt(countText.innerText);
    currentCount++;
    countText.innerText = currentCount;
})

const whishListBtn = document.querySelectorAll('.whishlist-btn-card');
let count = 0;
whishListBtn.forEach(btn => {
    btn.addEventListener('click', function(){
        let WishCount = parseInt(document.getElementById('wish-count'));
        let wishCountValue = parseInt(WishCount.innerText);
        count++;
        wishCount.innerText = count;
    })
})