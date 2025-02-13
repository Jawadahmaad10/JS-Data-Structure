const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// for( const movement of movements){
//    if(movement > 0){ 
//   console.log(`You deposited ${movement}`);
// }
// else{
// console.log(`You withdrew ${movement}`);
// }
// }


// for(const [i,movement] of movements.entries){
//     console.log(`${i} : ${movement}`);
// }


// console.log('------FOR-EACH-------')
// movements.forEach(function(){
//     if(movement > 0){ 
//         console.log(`You deposited ${movement}`);
//       }
//       else{
//       console.log(`You withdrew ${Math.obs(movement)}`);
//       }  
// })



movements.forEach(function(move, i , arr){
   if(move> 0){
    console.log(`Movement ${i+1} : You deposited ${move}`);
   }
   
   else{
    console.log(`Movement ${i+1} : You deposited ${move}  ${arr}`);
   }
})







// 0: function(200)
// 1: function(450)
// 2: function(400)

// ....
 

