const airline = "Tap Air Portugal";
const plane = 'A320';


console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);


console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));


// its the position where the extraction will start
// it will start from position 4 to end
// Tap Air Portugal
console.log(airline.slice(4));
console.log(airline.slice(4,7));


console.log(airline.slice());
console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));
console.log(airline.slice(-2));
console.log(airline.slice(1,-1));


const checkMiddleSeat = function(seat){
//B and E are middle seats
const s = seat.slice(-1);


if (s=== 'B' || s=== 'E'){
 console.log('You got the middle seat');   
}
else{
    console.log('You Got lucky');
}
}


checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('23C');



console.log(new String('Jawad'));
console.log(typeof new String('Jawad')); // Object