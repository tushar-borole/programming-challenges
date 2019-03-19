//https://www.hackerrank.com/challenges/recursive-digit-sum
function sum(n){
    var sumnumber = 0
    while(n>0)
    {
        sumnumber=sumnumber+n%10;
        n=Math.floor(n/10);
    }
    return sumnumber
}

function sumOfDigit(n){
    var sumOfNumber= sum(n)
    if(sumOfNumber.toString().length>1){
        return sumOfDigit(sumOfNumber)
    }else{
        return sumOfNumber
    }
}


function superDigit(n, k) {
    console.log(n.toString().repeat(k))
    var p = parseFloat(n.toString().repeat(k))
    return sumOfDigit(p)
}


console.log(superDigit(9875,4))
