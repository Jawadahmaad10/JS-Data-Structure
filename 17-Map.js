const rest = new Map();
// rest.set(key, value):
rest.set('name' , 'Classico Italiano');
rest.set(1, 'Firenze, Italy' );
console.log(rest.set(2, 'Lisbon, Portugal'));



// rest.set(key, value);

rest.set('categories',['Italian', 'Pizzeria' , 'Vegetarian', 'Organic']).set('open',11).set('close',23).set(true ,'We are open :D').set(false, 'We are closed :(');
console.log(rest);
// console.log(rest.set(2,'Lisbon , Portugal'));


// In order to read data from map

console.log(rest.get('name'));
// rest.set('categories',['Italian', 'Pizzeria' , 'Vegetarian', 'Organic']).set('open',11).set('close',23).set(true ,'We are open :D').set(false, 'We are closed :(');
// we read it by accesing the  key
console.log(rest.get('categories'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && rest.get('close')));


console.log(rest.has('categories'));

rest.delete(2);
console.log(rest);
console.log(rest.size);

//clears all the elements from map
// console.log(rest.clear);



//Use arrays or objects as map keys
const arr = [1,2];
rest.set(arr,'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);



console.log(rest.get(arr));
console.log(rest.get('h1'));
