//Use any data type , return any data type, short-circuiting


console.log('--------- OR --------------');
// It will return truthy values
console.log(3 || 'Jawad');
console.log('' || 'Jawad');
console.log(true || 0);
console.log(undefined || null);


// Its output is Hello because first truthy value is 'Hello';
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guest1 =  restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);


const guests2 = restaurant.numGuests || 10;



console.log('------ AND ----------');

console.log( 0 && 'J');
console.log(7 && 'Jawad');

console.log('Hello' && 23 && null && 'jonas');


// Practical example

if(restaurant.orderPizza){
    restaurant.orderPizza('mushrooms','spinach');
}