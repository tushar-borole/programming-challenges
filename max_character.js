//Find Max repeating character from string

const string = "Hello World!"

const maxCharacter = function(string){
    let maxCharacter = 0
    let character = ""
    const hashMap={}
    const stringArray = string.split("")
    stringArray.forEach(function(data){
        hashMap[data] =  ++hashMap[data] || 1
    })
    for(let char in hashMap){
        if(hashMap[char] > maxCharacter){
            maxCharacter = hashMap[char]
            character = char
        }
    }

    return character
}
console.log(maxCharacter(string))
