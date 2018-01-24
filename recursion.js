function reduce(arr,fn,initial) {
  let result=initial;
  if(arr.length==0){
    return result;
  }
  //result=fn(initial,arr[0],0,arr);
  result=fn(initial,arr[0],0,arr);
  return reduce(arr.slice(1),fn,result);
}

function fn(prev, curr, index, arr) {
  return prev + curr;
}

function multiplyArray(prev, curr, index, arr) {
  return prev * curr;
}

module.exports = reduce;
//check for ['Apple','Banana','Apple'];
//this helps in use of decorated fn... here if fn acts as a counter it is a decorator fn now

//the test case must show what the function we are calling does..reduce not only adds but a also
//sum or multiply but would do any function that is required
if(reduce([1,2,3,4],multiplyArray,1)===24){console.log('working basic array');}
else{
  console.log('not working basic array');
}

//try empty multiplyArray

if(reduce([],multiplyArray,1)===1){console.log('working for empty array');}
else{
  console.log('not working for empty array');
}

//try

if(reduce([1],multiplyArray,1)===1){console.log('working for sigle element array');}
else{
  console.log('not working for single element array');
}
