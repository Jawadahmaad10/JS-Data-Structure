const flight ='LH234';
const jawad = {
name: 'Jawad Ahmad',
passport: 1234477,
};


const checkIn = function(flightNum,passenger){
flightNum = 'LH999';
passenger.name = 'Mr' + passenger.name;

if(passenger.passport === 1234477){
  console.log('Checked In');  
}
else
{
    alert('Wrong passport !');
}
}


checkIn(flight,jawad);




const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jawad);
// checkIn(flight,jonas);