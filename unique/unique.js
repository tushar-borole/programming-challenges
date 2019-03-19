function isUnique(str) {
	let strArray = str.split("").map(function(v){return v.toLowerCase()})
	let out = true
	for(i = 0; i< strArray.length; i++){
	 for(let j = 0; j < strArray.length; j++){
	 if(i!=j & strArray[i]===strArray[j]){
			 out = false
		 }
	 }
	}
	return out
		// Your code here
}

console.log(isUnique('abcaef'))