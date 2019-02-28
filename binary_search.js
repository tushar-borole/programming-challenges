//Given a sorted array of integers, return the index of the given key. Return -1 if not found

//a is sorted array
let binary_search_recursive = function(a, key, low, high){
	if(low > high){
		return -1
	 }
	let mid = low + Math.floor((high - low) / 2);
	
	if(a[mid]===key){
	return mid
	}else if(key<a[mid]){
	return binary_search_recursive(a,key,low,(mid-1))
	}else{
	return binary_search_recursive(a,key,(mid+1),high)
	}
	
}


let binary_search = function(a, key) {
	//TODO: Write - Your - Code
		return binary_search_recursive(a, key, 0, (a.length - 1));
};