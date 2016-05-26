function rot13(str) {
    var re = /[A-Z]/i;
    var strRotArr = [];

    for(var i = 0; i < str.length; i++) {
	if (re.test(str[i])) {
	    if (str.charCodeAt(i) > 77) {
		strRotArr.push(String.fromCharCode(str.charCodeAt(i) - 13));
	    }
	    else {
		strRotArr.push(String.fromCharCode(str.charCodeAt(i) + 13));
	    }
	}
	else {
	    strRotArr.push(str[i]);
	}
    }

    return strRotArr.join("");
}
