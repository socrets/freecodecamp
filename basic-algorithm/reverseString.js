function reverseString(str) {
    var array = str.split('');
    var reverseArray = array.reverse();
    var result = reverseArray.join('');
    
    return result;
}
