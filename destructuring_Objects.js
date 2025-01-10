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


  const {name , openingHours , categories } = restaurant;

  console.log(name);
  console.log(openingHours);


//   2. Renaming Variables
// You can rename the variables while destructuring.
  // variable name do be deifferent from property name

  const {name: restaurantName, openingHours: hours, categories:tags} = restaurant;
  console.log(restaurantName , hours ,tags);


//3. Default Values

const {menu=[] , starterMenu:starters = [] } = restaurant;
console.log(menu , starters);








// Mutating variables

let a = 111;
let b = 999;

const obj = {a:23 , b:7, c:14};

({a,b} = obj);

console.log(a,b);


//Nested Objects

// const {fri:{open,close}} = openingHours;
//adding default vales 
const {fri:{open: o,close: c}} = openingHours;


console.log(o , c);


