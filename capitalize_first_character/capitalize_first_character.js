const capitalize = function(string){
    let finalOutput = ""
    for(let x of string.split(" ")){
        const temp = x[0].toUpperCase() + x.slice(1)
        finalOutput = finalOutput.concat(temp).concat(" ")
    }
    return finalOutput

}
capitalize('this is the game')//?
