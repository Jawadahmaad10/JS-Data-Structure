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

      },

     orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
     }

     
  };


  restaurant.orderDelivery({
   time: '22:30',
   address: 'Barcelona',
   startingIndex: 2,
   mainIndex : 2,
  });

  restaurant.orderDelivery({

   address: 'Spain',
   startingIndex: 1,
  });


// 1) Destructuring  
//Spread , because on right side =
const arr = [1,2,...[3,4]];

// 2. In Array Destructuring
// The rest operator can capture the remaining elements of an array during destructuring.


//Rest , because on lefy side of =
const fruits = ['apple' , 'banana','cherry','date'];

const [first,second , ...rest] = fruits;
// console.log(first,second,rest);



const [pizza , risotto , ...otherfood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risotto,otherfood);




//Objects : using spread Operator


const {sat,...weekdays} = restaurant.openingHours;
console.log(sat);
console.log(weekdays);



//Functions

const add = function(...numbers){
  let sum = 0;
  for (let i=0 ; i<numbers.length; i++)
    sum += numbers[i]
    console.log(sum);

  
}

add(2,3);
add(5,3,7,2);
add(1,2,3,4,5,6,7);


const x = [23,5,7];
add(...x);



restaurant.orderPizza('Mushrooms', 'onion' , 'olives','spinach');

restaurant.orderPizza('mushrooms');