function loggin(x,y){
  let Edittedx=y+x;
  return Edittedx;
}
let prepend=partiallyApply(loggin,10);
/*
var slice = Array.prototype.slice

function logger (namespace) {
 return function () {
   console.log.apply(console, [namespace].concat(slice.call(arguments)))
 }
}

module.exports = logger

var info = logger(‘INFO:’)
info(‘this is an info message’)

var warn = logger(‘WARN:’)
warn(‘this is a warning message’, ‘with more info’)
*/
