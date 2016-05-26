function largestOfFour(arr) {
    var result = [0];
    for (var i = 0; i < arr.length; i++) {
	arr[i].sort(function sortNumber(a, b) { return a - b; });
	result[i] = arr[i].pop();
    }
    return result;
}
