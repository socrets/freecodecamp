function confirmEnding(str, target) {
    var strLength = str.length;
    var targetLength = target.length;

    if (str.substr(str.length - targetLength) === target) {
	return true;
    }
    else {
	return false;
    }
}
