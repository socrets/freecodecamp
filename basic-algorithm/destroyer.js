function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);

    var result = args[0].filter(function(element) {
	for(var i = 1; i < args.length; i++) {
	    if (element === args[i]) {
		return false;
	    }
    	}
	return true;
    });

    return result;
}
