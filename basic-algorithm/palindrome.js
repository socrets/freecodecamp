function palindrome(str) {
    var lowerStr = str.toLowerCase();
    var re = /\s|,|\.|\-|\(|\:|\_|\/|\)/gi;
    var textStr = lowerStr.replace(re, '');
    var reversedStr = textStr.split('').reverse().join('');
    

    if (reverseStr == textStr) {
	return true;
    }

    return false;
}
