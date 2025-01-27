const restaurant1 = {
 name : 'Capri',
 numGuests: 20,
};


const restaurant2 = {
    name : 'Capri',
    owner: 'khan',
};

// OR assignment operator
// restaurant1.numGuests = restaurant1.numGuests || 10 ;
// restaurant2.numGuests = restaurant2.numGuests || 10 ;

// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;

console.log(restaurant1.numGuests);
   
//nullish assignment operator (null or undefined)
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

//  ;

restaurant1 &&= '<ANONYMOUS>';
restaurant1 &&= '<ANONYMOUS>';

console.log(restaurant1);





