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



//  for(const item of menu) console.log(item);

// for(const item of menu.entries()){
//     console.log(item);
// }


// for (const item of menu.entries()){
//     console.log(`${item[0]+1} ${item[1]}`);
// }

//using destructuring
for(const [i, element] of menu.entries()){
    console.log(`${i+1}: ${element}`);
}
// console.log(...menu.entries());
// console.log([...menu.entries()]);





