/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var array=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    var alphabets="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",")
    var morseArray=[]

    for(i=0;i<words.length;i++){
        var word=words[i].split("")
        var morseString = ""
        for(j=0;j<word.length;j++){
            var index = alphabets.indexOf(word[j])
            morseString = morseString +array[index]
        }
        if(!morseArray.includes(morseString)){
            morseArray.push(morseString)
        }
    }

    return morseArray.length


};


console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
