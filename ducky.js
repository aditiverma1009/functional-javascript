function duckCount() {
  //console.log(arguments);
  return Array.prototype.slice.call(arguments).filter(function(ele){
    return Object.prototype.hasOwnProperty.call(ele, 'quack');
  }).length;

}

module.exports = duckCount;
//check how many arguments have there own property as quack..not inherited property
//let duck={quack:true};
//let notDuck=Object.create({quack:true});
//send duck,notDuck combinations in test cases
//check all true
if(duckCount({ quack: true },{quack: true},{quack: true},{ quack: true })===4){
  console.log('working for true quack');
}
else{
  console.log('not working for true quack');
}
//check all false
if(duckCount({ quack: false },{quack: false},{quack: false},{ quack: false })===4){
  console.log('working for false quack');
}
else{
  console.log('not working for false quack');
}

//check with undefined
if(duckCount({ quack: undefined },{quack: undefined},{quack: undefined},{ quack: undefined })===4){
  console.log('working for undef quack');
}
else{
  console.log('not working for undef quack');
}

//mix bag with empty
if(duckCount({},{},{quack: true},{ quack: false })===2){
  console.log('working for mixed bag');
}
else{
  console.log('not working for mixed bag');
}

//for no arguments
if(duckCount({})===0){
  console.log('working for empty bag');
}
else{
  console.log('not working for empty bag');
}

if(duckCount([1,2,3])===0){
  console.log('working for array numbers');
}
else{
  console.log('not working for array numbers');
}
