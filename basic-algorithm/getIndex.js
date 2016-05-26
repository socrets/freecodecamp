function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {return a - b;});

    for(var i = 0; i < arr.length; i++) {
	if (num <= arr[0]) {
	    return 0;
	}
	if (num >= arr[i]) {
	    if (num <= arr[i+1]) {
		return i + 1;
	    }
	}
    }
    if (num >= arr[arr.length - 1]) {
	return arr.length;
    }
}
