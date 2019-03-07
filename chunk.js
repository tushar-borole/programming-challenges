const chunk = function(array,size){

    let outputArray = []
    for(i=0;i<array.length;i+size){
        outputArray.push(array.splice(i,size))
    }
    console.log(outputArray)
}

chunk([1,2,3,4,5],3)
