const steps = function(n){
 for(let row = 0 ; row <=n;row ++){
     let result = ""
     for(let column = 0 ; column <=n;column ++){
         if(column <= row){
             result += '#'
         }else{
             result += ' '
         }

     }
     console.log(result)
 }

}

steps(2)
