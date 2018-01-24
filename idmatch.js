function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    	return submittedUsers.every(function(alluser){
    		return goodUsers.some(function(gooduser){
    			return alluser.id===gooduser.id;
    		});
    	});
  };
}

module.exports = checkUsersValid;

let goodUsers=([
  { id: 2 },
  { id: 3 },
  { id: 1 }
]);

let testAllValid=([
  { id: 2 },
  { id: 1 }
]);

if(checkUsersValid(goodUsers)(testAllValid)===true){
  console.log('all users are valid');
}
else{
  console.log('all users are invalid');
}
