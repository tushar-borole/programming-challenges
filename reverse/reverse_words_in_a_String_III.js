// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//
//     Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.
// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var a = s.split(" ")
    var temp=[]
    for(i=0; i<a.length;i++){
        temp.push(a[i].split("").reverse().join(""))
    }
    return temp.join(" ")

};
