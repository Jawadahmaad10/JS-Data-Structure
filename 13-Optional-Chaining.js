const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
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
    },

    order: function(startingIndex , mainIndex){
     return [this.starterMenu[startingIndex] , this.mainMenu[mainIndex]];
    },

    orderDelivery : function({startingIndex=1, mainIndex=0 , time = '20.00', address})
      {
        console.log(`Order received! ${this.starterMenu[startingIndex]} and ${this.mainMenu[mainIndex]} will be delievered to 
            ${address} at ${time}`);

      }
  };

if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);



// Key Points
// The ?. operator checks if the value before it is null or undefined.
// If the value exists, it proceeds to access the property or method.
// If the value is null or undefined, it stops and returns undefined instead of throwing an error.



//Example
const days = ['mon' , 'tue' , 'wed' ,'thu' , 'fri' , 'sat','sun'];

for(const day of days){
// console.log(days[day]);
const open = restaurant.openingHours[day]?.open ?? 'closed';

console.log(`On ${day}, we open at ${open}`);

}



//Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');


//Arrays

const users = [{namee:'Jawad' ,email: 'hello@gmail'}];

console.log(users[0]?.namee ?? 'User array empty');



// if not above then do this 

if(users.length>0){
    console.log(users[0].namee);
}

else{
    console.log("User array is empty");
}