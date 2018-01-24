let counter=0;
function repeat(operator,num){
  if(num===0){
    return 0;
  }
  for(i=0;i<num;i++){
    operator();
  }
  return counter;
}
function operator() {
  counter++;
}
module.exports=repeat;

if(repeat(operator,5)===5){console.log('function repeat working check basic');}
else{
  console.log('Basicc functionality not found');
}

if(repeat(operator,0)===0){console.log('function repeat working check when num is 0');}
else{
  console.log('incorrect if num is 0-0 iterations');
}

console.log('Should not work for negative numbers:', repeat(operation, -3) === false);
