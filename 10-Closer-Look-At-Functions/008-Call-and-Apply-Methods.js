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

//we use it then
// Functions have methods too...
//Call method
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