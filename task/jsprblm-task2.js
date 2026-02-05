// Find the friend with the smallest name.

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getsmallest(names){
    let smallest = names[0];
    for (const name of names){
        if (name.length < smallest.length){
            smallest = name;
        }
    }
    return smallest;
}

const smallestName = getsmallest(names);
console.log('The smallest name is', smallestName);