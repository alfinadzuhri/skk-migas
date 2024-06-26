function okYesAlgorithm(n){
    
    let result = "";
    for (let i = 1; i <= n; i++) {
        if(i != 1){
            result += " ";
        }
        if(i % 3 == 0 && i % 4 != 0){
            result += "OK";
        }else if(i % 4 == 0 && i % 3 != 0){
            result += "YES";
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
