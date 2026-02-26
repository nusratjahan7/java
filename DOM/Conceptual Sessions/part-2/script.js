let thriving = [];
let struggling = [];
let currentStatus = 'all';

let total = document.getElementById('total');
let strugglingCount = document.getElementById('struggling-count');
let thrivingCount = document.getElementById('thriving-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');


const allCardSection = document.getElementById('all-card');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

function calculateCount (){
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thriving.length;
    strugglingCount.innerText = struggling.length;
}
calculateCount();

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-black', 'text-white');
    thrivingFilterBtn.classList.remove('bg-black', 'text-white');
    strugglingFilterBtn.classList.remove('bg-black', 'text-white');

    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    thrivingFilterBtn.classList.add('bg-gray-300', 'text-black');
    strugglingFilterBtn.classList.add('bg-gray-300', 'text-black');

    const selected = document.getElementById(id);
    
    currentStatus = id;
    

    if(id === "thriving-filter-btn"){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderThriving();
    }
    else if (id === 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if (id === 'struggling-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderStruggling();
    }

}

mainContainer.addEventListener('click', function(event){
   if(event.target.classList.contains('thriving-btn')){
     const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector('.plantName').innerText;
    const latinName = parentNode.querySelector('.latinName').innerText;
    const light = parentNode.querySelector('.light').innerText;
    const water = parentNode.querySelector('.water').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;
    parentNode.querySelector('.status').innerText = 'Thrive';

    const cardInfo = {
        plantName, 
        latinName, 
        light, 
        water, 
        status:'thrive', 
        notes
    }
    const plantExist = thriving.find(item => item.plantName == cardInfo.plantName);

    

    if(!plantExist){
        thriving.push(cardInfo);
    }
    struggling = struggling.filter(item => item.plantName !== cardInfo.plantName);
    if (currentStatus === 'struggling-filter-btn'){
         renderStruggling();
    }
    calculateCount();
    }
    else if(event.target.classList.contains('struggling-btn')){
     const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector('.plantName').innerText;
    const latinName = parentNode.querySelector('.latinName').innerText;
    const light = parentNode.querySelector('.light').innerText;
    const water = parentNode.querySelector('.water').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;
    parentNode.querySelector('.status').innerText = 'struggle';

    const cardInfo = {
        plantName, 
        latinName, 
        light, 
        water, 
        status:'struggle', 
        notes
    }
    const plantExist = struggling.find(item => item.plantName == cardInfo.plantName);

    if(!plantExist){
        struggling.push(cardInfo);
    }
    thriving = thriving.filter(item => item.plantName !== cardInfo.plantName);
    if(currentStatus === "thriving-filter-btn"){
        renderThriving();
    }

    calculateCount();
    
   }
})

function renderThriving(){
    filterSection.innerHTML = ''; 
    for(let thrive of thriving){
        let div = document.createElement('div');
        div.className = "card flex justify-between border p-8 mb-5";
        div.innerHTML = `
        <!-- main part 1 -->
        <div class="space-y-6">
            <!-- part 1 -->
            <div>
                <p class="plantName text-4xl mb-3">${thrive.plantName}</p>
                <p class="latinName text-gray-500">Latin Name</p>
            </div>
            <!-- part 2 -->
            <div class="flex gap-2">
                <p class="light bg-gray-200 px-5">Bright Indicate</p>
                <p class="water bg-gray-200 px-5">weekly</p>
            </div>
            <!-- part 3 -->
             <p class="status">${thrive.status}</p>
             <p class="notes">New leaf unfurling by the east window.</p>
            <div class="flex gap-5">
                <button class="thriving-btn bg-green-200 px-4 py-2">
                Thrive</button>
                <button class="struggling-btn bg-red-200 px-4 py-2">
                Struggle</button>
            </div>
            </div>
        <!-- main part 2 -->
        <div>
            <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
        </div>
        `
        filterSection.appendChild(div);
    }
} 

function renderStruggling(){
    filterSection.innerHTML = ''; 
    for(let struggle of struggling){
        let div = document.createElement('div');
        div.className = "card flex justify-between border p-8 mb-5";
        div.innerHTML = `
        <!-- main part 1 -->
        <div class="space-y-6">
            <!-- part 1 -->
            <div>
                <p class="plantName text-4xl mb-3">${struggle.plantName}</p>
                <p class="latinName text-gray-500">Latin Name</p>
            </div>
            <!-- part 2 -->
            <div class="flex gap-2">
                <p class="light bg-gray-200 px-5">Bright Indicate</p>
                <p class="water bg-gray-200 px-5">weekly</p>
            </div>
            <!-- part 3 -->
             <p class="status">${struggle.status}</p>
             <p class="notes">New leaf unfurling by the east window.</p>
            <div class="flex gap-5">
                <button class="thriving-btn bg-green-200 px-4 py-2">
                Thrive</button>
                <button class="struggling-btn bg-red-200 px-4 py-2">
                Struggle</button>
            </div>
            </div>
        <!-- main part 2 -->
        <div>
            <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
        </div>
        `
        filterSection.appendChild(div);
    }
} 