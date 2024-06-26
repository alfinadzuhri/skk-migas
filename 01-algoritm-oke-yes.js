function okYesAlgorithm(n){
    
    let result = "";
    
    //find the element
    for (let i = 1; i <= n; i++) {

        //add space in every element
        if(i != 1){
            result += " ";
        }

        //change multiple of 3 to OK
        if(i % 3 == 0 && i % 4 != 0){
            result += "OK";

        //change multiple of 4 to YES
        }else if(i % 4 == 0 && i % 3 != 0){
            result += "YES";

        //change multiple of 3 & 4 to OKYES
        }else if(i % 4 == 0 && i % 3 == 0){
            result += "OKEYES";
            
        }else{
            result += i;
        }
        
    } 
    return result;
}

const sample = 15;
console.log(okYesAlgorithm(sample));
