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
 name: 'Eurowings',
 iataCode: 'EW',
 bookings: [],
};




const book = lufthansa.book;


// book(23 , 'Sarah Williams');

// Functions have methods too...

book.call(eurowings,23,'Lionel');
console.log(eurowings);


book.call(lufthansa, 239 ,'Ronaldo');

const swiss = {
 name : 'Swiss Air Lines',
 iataCode: 'LX',
 bookings: [],
};


book.call(swiss,583 , 'Mary Cooper');