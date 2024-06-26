function eleminationMultipleOfThree(arr){
    
    //initiation result
    let result = [];

    //elemination multiple of three
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 != 0){
            result.push(arr[i])
        }
    }

    //sorting the result
    result.sort((a, b) => a - b);

    return result;
}

const n = [12, 9, 13, 6, 10, 4, 7, 2]
console.log(eleminationMultipleOfThree(n))