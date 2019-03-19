let reverseInt = function(number){
    if(Math.sign(number)===-1){
        return -parseInt(number.toString().replace("-","").split("").reverse())
    }

}
