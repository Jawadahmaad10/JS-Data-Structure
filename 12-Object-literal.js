const weekdays = ['mon' , 'tue' , 'wed' ,'thu' , 'fri' , 'sat','sun'];

const openingHours = {
    
        [weekdays[3]]: {
          open: 12,
          close: 22,
        },
        [weekdays[3]]: {
          open: 11,
          close: 23,
        },
        [weekdays[3]]: {
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
  
    // openingHours: openingHours,
    //ES^ enhanced Object literals
    openingHours,

    // order: function(startingIndex , mainIndex){
    //  return [this.starterMenu[startingIndex] , this.mainMenu[mainIndex]];
    // },

    // ES6 functionality

     order(startingIndex , mainIndex){
        return [this.starterMenu[startingIndex] , this.mainMenu[mainIndex]];
       },

    orderDelivery ({startingIndex=1, mainIndex=0 , time = '20.00', address})
      {
        console.log(`Order received! ${this.starterMenu[startingIndex]} and ${this.mainMenu[mainIndex]} will be delievered to 
            ${address} at ${time}`);

      }
  };
