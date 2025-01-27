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


const question = new Map([
['question' , 'What is the best programming language in the world ?'],
[1 , 'C'],
[2 , 'Java'],
[3 , 'JavaScript'],
['correct' , 3],
[true , 'Correct'],
[false , 'Try again !'],

]);


// for(const [key,value] of question){
//     console.log(` ${key} : ${value}`);
// }



// Convert Object to map
// To convert an object to a Map in JavaScript, you can use the Object.entries() method, which returns an array of key-value pairs, and pass that array to the Map constructor. 
console.log(Object.entries(openingHours));


const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


//Quiz app

console.log(question.get('question'));

for(const [key,value] of question){
    if(typeof key === 'number'){
     console.log(`Answer ${key} : ${value}`);   
    }
}



// const answer = Number(prompt('Your answer'));
const answer = 3;

console.log(answer)



console.log(question.get(question.get('correct') === answer));



// convert map to array

console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// Using Spread Operator (...)
// The spread operator can also convert the Map into an array of key-value pairs.;

const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]);
  
  const mapToArray = Array.from(myMap);
  console.log(mapToArray);
  // Output: [['a', 1], ['b', 2], ['c', 3]]


// using spread operator  
const mapToArray2 = [...myMap];
console.log(mapToArray2);
// Output: [['a', 1], ['b', 2], ['c', 3]]
