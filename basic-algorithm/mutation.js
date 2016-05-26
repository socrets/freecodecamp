function mutation(arr) {
    var firstArrLower = arr[0].toLowerCase();
    var secondArrLower = arr[1].toLowerCase();
    
    for(var i = 0; i < secondArrLower.length; i++) {
	if (firstArrLower.indexOf(secondArrLower[i]) === -1) {
	    return false;
	}
    }

    return true;
}
