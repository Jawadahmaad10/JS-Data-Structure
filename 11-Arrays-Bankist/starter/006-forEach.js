const currencies = new Map([
    ['USD' , 'United States Dollar'],
    ['EUR' , 'Euro'],
    ['GBP' , 'Pound sterling'],
]);

console.log(currencies);

currencies.forEach(function(value,key,map){
    console.log(`${key} : ${value} :: ${map}`);
})


//Set

const currenciesUnique = new Set(['USD', 'GBP' , 'USD' , 'EUR' , 'EUR']);
console.log(currenciesUnique);


currenciesUnique.forEach(function(value, key,map){
    console.log(`${key} : ${value} }`);
})