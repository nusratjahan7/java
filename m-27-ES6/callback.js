// document.getElementById('btn').addEventListener('click', function(event){

// })

// addEventListener('click', function(event){})

function settleLife(name, isBCS, marriage, patri){
    if(isBCS){
        marriage(patri);
    }

}
function boloKobul (patri){
    console.log('Kobul', patri);
}

settleLife('Tomal', true, boloKobul, 'nari');
// boloKobul('pori');