'use strict';

// Destructing is breaking complex data structure down to a smaller data structure

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23 , Firenze, Italy',
  categories : ['Italian' , 'Pizzeria' , 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia' , 'Bruschetta', 'Garlic', 'Bread' , 'Caprese Salad'],
  mainMenu : ['Pizza', 'Pasta' , 'Risotto'],
  order: function(startIndex,mainIndex){
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  }  
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];


console.log(a, b , c);

// With destructuring we can retrieve all the three elements at the same time 

const [x,y,z] = arr;
console.log(x,y,z);

// both same above but we used destructuring method

console.log(arr);


const [first,second] = restaurant.categories;
// it will skip the third element
// const [first, ,second] = restaurant.categories;
// console.log(first,second);


//changing the first and second values 

let [main,secondary] = restaurant.categories;

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
 
// console.log(main,secondary);


// Now by using destructing we can do it 

[main, secondary] = [secondary , main];

console.log(main, secondary);

// 
console.log(restaurant.order(2,0));

// By using destructuring
// receive two (2)  values from a function
const [starter,mainCourse] = restaurant.order(2,0);
console.log(starter , mainCourse);


//nested array 

const nested = [2,4,[5,6]];
// const [i, ,j] = nested;
// console.log(i, j);

//nested destructuring
const [i , , [j,k]] = nested;
console.log(i , j ,k);


// Default values 

const [p,q,r] = [8,9];
console.log(p,q,r);

// output : 8 9 undefined

const [l=1 ,m=1 ,n=1] =[8]
console.log(l,m,n);









