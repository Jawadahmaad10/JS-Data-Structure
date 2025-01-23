const airline = "Tap Air Portugal";

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());



//Fix Capitalization in name
const passenger = 'jAWad kHAn';

// console.log(passenger.toUpperCase());
// console.log(passenger.toLowerCase());

const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect = passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);



//Comparing emails

const email = 'hello@jawad.io';
const loginEmail =' Hello@Jawad.Io \n';


// The trim() method in JavaScript is used to remove whitespace from both ends of a string/
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);



//replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£' , '$').replace(',','.');
console.log(priceUS);


const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door' , 'gate'));



// Booleans


const plane = 'A320ne0';

console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('Air'));

