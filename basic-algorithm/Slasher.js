function slasher(arr, howMany) {
    if(howMany < arr.length) {
	return arr.slice(howMany, arr.length);
    }
    else {
	return [];
    }
}
