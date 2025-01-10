const array = {
 name : 'khan',
 categories : ['a' , ' b ' , 'c'],
 nums :     ['1' ,'2' , '3'],
 order : function(categoriesIndex , numsIndex){
   return [this.categories[categoriesIndex], this.nums[numsIndex]];
 }
};



const [main,secondary] = array.order(1,0);
console.log(main, secondary);