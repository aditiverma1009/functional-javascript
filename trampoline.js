function repeat(operation, num) {
  console.log('i am in repeat');
  return function() {
    if (num <= 0) return;
    operation();
    console.log('i am going to repeat !!');
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  while(fn && typeof fn === 'function') {
    console.log('i am in trampoline');
    fn = fn();
  }
}

function operation(){
}
num=10;

function x(operation, num) {
  trampoline(function() {
    return repeat(operation, num);
  });
};
x(operation,num);
