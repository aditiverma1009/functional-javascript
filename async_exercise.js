function bingo(){
 let users = []
 let n=5;
 for(let i=0; i< n; i++){
   users.push(setTimeout(function(){
     return 1;
   }),0)
 }
 return users;
}

console.log(bingo());
