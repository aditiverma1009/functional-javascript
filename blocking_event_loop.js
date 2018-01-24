function repeat(operation, num) {
  if (num <= 0) return;

  operation();

  setTimeout(function() {
    repeat(operation, --num);
  },100);
}

module.exports = repeat;
//try with run .js
//make a operation fn and call repeat
//print something
