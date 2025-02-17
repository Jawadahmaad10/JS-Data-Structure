const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



// accumulator

// const balance = movements.reduce(function(accumulator, current , i , arr){
//    console.log(`Iteration ${i}: ${accumulator}`);
//    return accumulator + current; 
// }, 0);

// console.log(balance);

//arrow function

const balance = movements.reduce((acc , curr) =>  acc + curr + 0);
console.log(balance);


// can also do it like this 

let balance2 = 0 ;

for(const mov of movements)  balance2+=mov;

console.log(balance2);


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// Maximum value
const max = movements.reduce((acc,mov) => {
 if(acc > mov){
  return acc;
 }
 else{
  return mov;
 }
},movements[0]);


console.log(max);
