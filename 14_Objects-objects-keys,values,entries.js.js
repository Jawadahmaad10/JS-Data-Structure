const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: openingHours,

    order: function(startingIndex , mainIndex){
     return [this.starterMenu[startingIndex] , this.mainMenu[mainIndex]];
    },

    orderDelivery : function({startingIndex=1, mainIndex=0 , time = '20.00', address})
      {
        console.log(`Order received! ${this.starterMenu[startingIndex]} and ${this.mainMenu[mainIndex]} will be delievered to 
            ${address} at ${time}`);
      }
  };


// for (const day of Object.keys(openingHours)){
//     console.log(day);
// }


const properties = Object.keys(openingHours)
console.log(properties);

for(const day of Object.keys(restaurant.openingHours))
   console.log(day); 

const user = {
    name: 'Alice',
    age: 25,
    job: 'Developer'
  };
  
//   console.log(Object.keys(user)); 
  // Output: ['name', 'age', 'job']


let openStr =`We are open on ${properties.length} days:`;

  for (const day of properties){
   openStr += `${day}`;
  }


  //Property Values 

const values = Object.values(openingHours);
// console.log(values);  



// Entire Object

const entries = Object.entries(openingHours);
console.log(entries);


// destructuring in arrays
for(const [key , {open,close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}


