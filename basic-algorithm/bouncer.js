function filterFalsy(element) {
    var falsyArr = [false, null, 0, "", undefined, NaN];
    for(var i = 0; i < falsyArr.length; i++) {
	if (element === falsyArr[i]) {
	    return false;
	}

	if (isNaN(element) && !(typeof element === "string")) {
	    return false;
	}
    }
    return true;
}

function bouncer(arr) {
    return arr.filter(filterFalsy);
}
