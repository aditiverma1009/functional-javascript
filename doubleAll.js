function doubleAll(numbers) {
  return numbers.map(x=>x*2);
}
module.exports = doubleAll;

/*OR

function doubleAll(numbers) {
    return numbers.map(function double(num){return num*2;});
}
module.exports = doubleAll
*/
if(doubleAll([1,4,5,3]).toString()===[2,8,10,6].toString()){console.log('Right multiplication.');}
else{
  console.log('Not the right multiplication and being able to compare arrays from return and should be answer');
}
if(doubleAll([]).toString()===[].toString()){console.log('Right multiplication in case of empty array.');}
else{
  console.log('Not the right multiplication for empty array');
}
if(doubleAll([-1,-4,-5,-3]).toString()===[-1,-4,-5,-3].toString()){console.log('Right multiplication in case of negative element array.');}
else{
  console.log('Not the right multiplication for empty array');
}
