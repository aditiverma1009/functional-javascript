function upperCaser(input){
	let ivalue;
	let result="";
	for(let i=0;i<input.length;i++){
		ivalue=input.charAt(i);
		if(ivalue>=97 && ivalue<=122){
			result+=String.fromCharCode(ivalue-32);
		}
		else if(ivalue>=65 && ivalue<=90 || ivalue==32){
			result=result+String.fromCharCode(ivalue);
		}
		else{
			result=result+String.fromCharCode(ivalue);
		}
	}

	return result;

}
module.exports=upperCaser
if(upperCaser("aditi")=="ADITI"){console.log("lc turned up");}
