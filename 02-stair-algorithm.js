
//you can change it for another result
const sample = 5

function arrStaircase(n) {
  let result = "";
  let count = 0;
 
  //variable for looping C
  let temp = "";
  let flag = true;
  //======================

  let matrix = matrixTaksD(n);
  
  for (let i = 1; i <= n; i++) {

    if (i != 1) {
      result += "\n";
    }

    //Looping A
    for (let j = 0; j < i; j++) {
        if(j == 0 && i == 1){
            result += "a. "
        } else if(j== 0){
            result += "   "
        }
      result += i;
    }

    result += insertWhiteSpace(n - i + 3);

    //Looping B
    for (let j = 0; j < i; j++) {
        if(j == 0 && i == 1){
            result += "b. "
        } else if(j== 0){
            result += "   "
        }
      result += j + 1;
    }
    result += insertWhiteSpace(n - i + 3);

    //Looping C
    for (let j = 0; j < i; j++) {
        if(j == 0 && i == 1){
            result += "c. "
        } else if(j== 0){
            result += "   "
        }
      if (count < n && flag) {
        count++;
        temp += count;
        if (count == 5) {
          flag = false;
        }
      } else {
        count--;
        temp += count;
        if (count == 1) {
          flag = true;
        }
      }
    }
    result += temp;
    temp = "";

    result += insertWhiteSpace(n - i + 3);

    // Looping D
    for(let j =0 ; j < n; j++){
        if(j == 0 && i == 1){
            result += "d. "
        } else if(j== 0){
            result += "   "
        }
        result += matrix[i-1][j] + " ";
    }

  }

  return result;
}

//this funtion for build a matrix
function matrixTaksD(n){

    let count = 0;
    //build a matix
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    //fill the matrix
    for(let i = 1; i <= n; i++){
        for (let j = 0; j < n; j++) {
            count++;
            if (i % 2 == 0) {
              matrix[n - j - 1][i - 1] = count;
            } else {
              matrix[j][i - 1] = count;
            }
          }
    }
    return matrix;
}

//this function for count a white space
function insertWhiteSpace(n) {
  let result = "";
  for (let i = 1; i < n; i++) {
    result += " ";
  }
  return result;
}

console.log(arrStaircase(sample));
