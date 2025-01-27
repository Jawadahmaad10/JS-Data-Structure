const orderSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza']);

console.log(orderSet);

console.log(new Set('Jawad'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);


for( const order of orderSet){
    console.log(order);
}


const staff = ['Waiter', 'Chef','Waiter','Manager','Chef','Waiter'];

//  const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];
// The spread operator (...) converts the Set back into an array.
console.log(staffUnique);

console.log( new Set(['Waiter', 'Chef','Waiter','Manager','Chef','Waiter']).size);
console.log( new Set('Jawad').size);
