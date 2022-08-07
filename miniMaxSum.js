//minSum and maxSum of 4 of 5 integers
const arr = [1,3,5,7,9]

let maxNum = arr[0];
let minNum = arr[0];
let sum = 0;

const minMaxFun = (arr) => {
  for(let i=0; i< arr.length; i ++) {
    const currentNum = arr[i];
    if(maxNum < currentNum) {
      maxNum = currentNum;
    }else if(minNum > currentNum) {
      minNum = currentNum;
    }
    sum += currentNum;
  }
  const minSum = sum - maxNum;
  const maxSum = sum - minNum;
  
  console.log(minSum + " " + maxSum);

}

minMaxFun(arr);
