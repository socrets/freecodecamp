function chunkArrayInGroups(arr, size) {
    
    var result = [];
    var i = 0;
    while(i < arr.length) {
	result.push(arr.slice(i, i+size));
	i += size;
    }
    
    return result;
}
