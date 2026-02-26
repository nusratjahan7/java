const king = { name: 'Mufasa', age: 55, kingdom: 'Pride lands'} ;
// Object.freeze(king);
Object.seal(king);
delete king.age;
delete king.kingdom;
king.queen = 'Sarabi';
king.name = 'King simba';
console.log(king);