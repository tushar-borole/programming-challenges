let isPalindrome = function(a) {
    const arr = a.split("")
    return arr.every((char, i) => {
        return char === arr[arr.length - i - 1]
    })
}


console.log(isPalindrome('abba'))
