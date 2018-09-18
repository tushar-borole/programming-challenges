// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
//
//
//
//     Example 1:
//
// Input: "Hello"
// Output: "hello"
// Example 2:
//
// Input: "here"
// Output: "here"
// Example 3:
//
// Input: "LOVELY"
// Output: "lovely"
//https://leetcode.com/problems/to-lower-case/description/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    // create a result variable
    var result = ''

    for (var i = 0; i < str.length; i++) {
        // get the code of the current character
        var code = str.charCodeAt(i)

        // check if it's within the range of capital letters
        if (code > 64 && code < 91) {

            // if so, add a new character to the result string
            // of the character from our code, plus 32
            result += String.fromCharCode(code + 32)
        } else {

            // otherwise, just add the current character
            result += str.charAt(i)
        }
    }

    // return the result
    return result
};
