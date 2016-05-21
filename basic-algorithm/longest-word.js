function findLongestWord(str) {

    var strToArray = str.split(" ");
    var wordLength = [0];
    for (var i = 0; i < (strToArray.length); i++) {
	wordLength.push(strToArray[i].length);
    }
    
    wordLength.shift();
    wordLength.sort(function(a, b) {
	return a - b;
    });
    
    return wordLength.pop();
}
