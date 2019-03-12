const isAnagram = function(stringA, stringB){
    const sortedStringA = stringA.split('').sort(stringA).join('')
    const sortedStringB = stringB.split('').sort(stringB).join('')

    if(sortedStringA === sortedStringB){
        return true
    }
    return false

}

isAnagram('rail s!afety','fairy t!ales')

