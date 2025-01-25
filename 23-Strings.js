// The string 'a+very+nice+string' is split at every occurrence of the '+' character.
// The resulting substrings are stored in an array.
console.log('a+very+nice+string'.split('+'));
console.log('Jawad Ahmad'.split(' '));


// destructuring 

const [firstName , lastName] = 'Jawad Ahmad'.split(' ');

// The join() method in JavaScript is used to join all elements of an array into a single string.
const newName = ['Mr.', firstName, lastName.toUpperCase()].join('');

console.log(newName);


const capitalizeName = function(name){
const names = name.split(' ');
const namesUpper = [];

for (const n of names){
//    namesUpper.push(n[0].toUpperCase() + n.slice(1));
// can also do this below
   namesUpper.push(n.replace(n[0] , n[0].toUpperCase()));
}

console.log(namesUpper.join(' '));
}


capitalizeName('software engineers developers');
capitalizeName('javascript development is the best');




//PadStart

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30,'+'));
console.log('Jawad'.padStart(23,'+'));



