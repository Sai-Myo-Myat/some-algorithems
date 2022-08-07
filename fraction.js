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
