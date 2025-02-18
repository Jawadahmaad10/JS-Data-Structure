

const eurTousd = 1.1;
 
const totalDepositsUsd = movements.filter(mov => mov > 0).map((mov,i, arr) => {mov * eurTousd}).reduce((acc , mov) => acc + mov, 0);
console.log(totalDepositsUsd);