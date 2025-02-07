const lufthansa = {
    airline: 'Lufthansa',
    iataCode : 'LH',
    bookings: [],
    // book: function(){

    // }
    book(flightNum,name){
     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
    this.bookings.push({flight : `${this.iataCode} ${flightNum}` , name})
    },

}


lufthansa.book(239 , 'Jawad Ahmad ');
lufthansa.book(635 , 'Jawad khan ');

console.log(lufthansa);



const eurowings = {
 airline: 'Eurowings',
 iataCode: 'EW',
 bookings: [],
};




const book = lufthansa.book;

// Does NOT work -> this keyword
// book(23 , 'Sarah Williams');

// we use it then
// Functions have methods too...
// Call method
book.call(eurowings,23,'Lionel');
console.log(eurowings);


book.call(lufthansa, 239 ,'Ronaldo');

const swiss = {
 name : 'Swiss Air Lines',
 iataCode: 'LX',
 bookings: [],
};


book.call(swiss,583 , 'Mary Cooper');
console.log(swiss);



//Apply method

const flightData = [583, 'Goerge Cooper'];
book.apply(swiss,flightData);
console.log(swiss);


book.call(swiss,...flightData);



// Use .call() when you know the exact number of arguments and pass them one by one.
// Use .apply() when you have an array of arguments (e.g., from user input or an API response).



const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23 , 'Barcelona');
bookLH(24 , 'Barcelona');
bookLX(25 , 'Barcelona');




const we = lufthansa.book.bind(swiss);
we(21,'jawad');




// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    //this keyword refers to the element buy
    this.planes ++; 
    console.log(this.planes); 
}
// // Why Use .bind(lufthansa)?
// Without .bind(lufthansa), this inside buyPlane would refer to the button that was clicked (because event listeners change the this context to the element they are attached to).
// .bind(lufthansa) explicitly sets this to lufthansa, making sure the method behaves as expected.

document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));


// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(10 , 200));

//first argument of bind is this keyword
// in this case we put null
const addVAT = addTax.bind(null,0.23);
// addVAT = value => value + value * 0.23



console.log(addVAT(100));
console.log(addVAT(23));




const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(100));

