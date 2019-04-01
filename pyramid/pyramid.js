const pyramid = function(n){
    const total = n*n-n //?
    for(i = 0; i <= n;i++){
        const numberOfBlank = (n-i)/2
        let result = ''
        for(j = 0; j <= total; j++){
            if(i <= numberOfBlank){
                result +='_'
            }
            result +='#'
        }
        console.log(result)
    }
}

pyramid(3)
