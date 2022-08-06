//fraction of positve, negative and zero in an array
// const arr = [1,-1,0,2,-3];

const fraction = (arr) => {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  const arrLength = arr.length;
  for(let i=0; i < arrLength; i++) {
    if(arr[i] < 0){
      negative += 1
    }else if(arr[i] > 0) {
      positive += 1
    }else {
      zero += 0
    }
  }
  const pos = positive / arrLength;
  const neg = negative / arrLength;
  const zer = zero / arrLength;
  console.log(pos.toFixed(6));
  console.log(neg.toFixed(6));
  console.log(zer.toFixed(6));
}

//minSum and maxSum of 4 of 5 integers
function miniMaxSum(arr) {
  // Write your code here
  //set minNum and maxNum 
  //loop and sum all numbers
  let minNum = arr[0];
  let maxNum = arr[0];
  let sum = 0;
  for(let i=0; i< arr.length; i++){
      if(minNum > arr[i]) {
          minNum = arr[i]
      }else if(maxNum < arr[i]){
          maxNum = arr[i]
      }
      sum += arr[i];
  }
  const minSum = sum - maxNum;
  const maxSum = sum - minNum;
  console.log(minSum + " " + maxSum)
}

//time conversion
function timeConversion(s) {
  // Write your code here
  //get AM or PM from s
  //AM --> 12AM  => 00 / 
  //PM --> 12 > _ => +12 / 12 => 12
  const amOrPm = s.chatAt(8);
  let hour = s.slice(0,2);
  let militaryHour = "";

  if(amOrPm === "A") {
    if(hour === "12") {
      militaryHour = "00";
    }else {
      militaryHour = hour;
    }
  }else {
    if(hour === "12"){
      militaryHour = hour;
    }else {
      militaryHour = parseInt(hour) + 12
    }
  }
  return militaryHour.toString() + s.slice(2,8)
}

