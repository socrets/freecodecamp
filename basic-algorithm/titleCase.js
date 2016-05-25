function titleCase(str) {
    var strArray = str.split(" ");
    var strUpperArray = [0];
    for (var i = 0; i < strArray.length; i++) {
	strUpperArray[i] = strArray[i].replace(/\w*\'?\w*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    return strUpperArray.join(" ");
}
