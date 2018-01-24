
function countWords(inputWords){
  function fn(allWords,word){
    if (word in allWords) {
      allWords[word]++;
    }
    else {
      allWords[word] = 1;
    }
    return allWords;
  }
  //console.log(typeof(allWords));

  return inputWords.reduce(fn,{});
}
let inputWords = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
module.exports=countWords;
//DO NOT USE TOSTRING
if(countWords(inputWords).toString()==={Apple:2,Banana:1,Durian:3}.toString()){
  console.log('Returning the object');
}
else{
  console.log('Not Returning the object');
}
let inputWords2 = [{}];

if(countWords(inputWords2).toString()==={}.toString()){
  console.log('Returning the object in case of empty array');
}
else{
  console.log('Not Returning the right object in case of empty array');
}
//do not use to String coz ..either compare thru iteration each key and value
//include test case for all same element,all unique elements and also for empty string slots..
//json.stringify
/*OR
function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }

    module.exports = countWords*/
