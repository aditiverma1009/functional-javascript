function getShortMessages(messages) {
  let extractMessages=messages.map(msg=>msg.message);
  let result=extractMessages.filter(word =>word.length <50);
  return result;
}

module.exports = getShortMessages;


if(getShortMessages([('aassssd'),('ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss')])===true){
  console.log('all users are valid');
}
else{
  console.log('all users are invalid');
}
//TESTCASES


/*OR
 module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }*/
