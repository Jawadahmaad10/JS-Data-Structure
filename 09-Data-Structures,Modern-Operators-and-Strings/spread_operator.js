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
     orderPasta: function(ing1,ing2,ing3){
       console.log(`Your delicious pizza is contains ${ing1} ${ing2} ${ing3}`);

     } 

  };

const arr = [7,8,9];
const badNewArr = [1,2,arr[0], arr[1],arr[2]];
console.log(badNewArr);


const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);



// accessing the objects properties

const newMenu = [...restaurant.mainMenu, 'Gnocci' ];

console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);


//Join 2 arrays
const menu = [...restaurant.starterMenu , ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays , strings , maps but NOT Objects

const str = 'Jonas';
const letters = [...str,' ' , 'J'];
console.log(letters);
console.log(...str);


//Real-world example
// const ingredients = [prompt("Let's make pasta! Ingredient?"),
//     prompt('Ingredient 2 ?'),
//     prompt('Ingredient 3 ?')];

//     console.log(ingredients);
   
//  restaurant.orderPasta(
//    ingredients[0] , ingredients[1] , ingredients[2], 
//  );   
// //instead of above we do this below
//  restaurant.orderPasta(...ingredients);


 //Objects


 const newRestaurant = {...restaurant , founder: "Jawad"};

 console.log(newRestaurant);


 const restaurantCopy = {...restaurant};
 restaurantCopy.name = 'Kaldis';
 console.log(restaurantCopy.name);
 console.log(restaurant.name); 

