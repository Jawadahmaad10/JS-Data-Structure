


const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}


const greeterHey = greet('Hey');
greeterHey('Jawad');

greet('hello')('Khan');




//Using arrow function

const greetArr = (greetings) => (name) => console.log(` ${greeting} ${name}`);

greetArr('Hi')('Jawad');
