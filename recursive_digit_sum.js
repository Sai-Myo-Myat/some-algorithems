//recursive_digit_sum
//it's not a good approach, and not convenience if input is too large, it's will be abort called err. I'm gonna update later...


function superDigit(n, k) {
  // Write your code here
  
  const sumFun = (number) => {
    let sum = 0;
    for(let i=0; i< number.length; i++){
      sum += number[i]
    };
    return sum;
  }
  if(k>0){
    n = sumFun(n);
    n * k;
  }

  const recurse = (n) => {
    if(n.length ===1) {
      return n;
    }
    sumFun(n);
    recurse(n)
  }
  console.log(recurse(n))

  return recurse(n.toString());
    
}
superDigit(148,3)


// function superDigit(n, k) {
//   // Write your code here
//   let p = '';
//   let pArr = []
//   for(let i=0; i<k ; i++){
//     console.log(typeof(n),n )
//     p += n.toString();
//   }
//   let superDigit = 0;

//   const operation = () => {
//     superDigit = 0; 
//     pArr = [];
//     for(let j=0; j<p.length; j++){
//       console.log(typeof(p),p.charAt(j))
//       pArr.push(parseInt(p.charAt(j)))
//     } 
//     pArr.map(int => superDigit += int)
//     p = superDigit.toString();
  
//     console.log(p,pArr)
//   }

//   if(superDigit === 0 ){
//     operation();
//   }

//   if(superDigit.toString().length > 0){
//     const superDigitLength = superDigit.toString().length;
//     for(let k=0; k<superDigitLength; k++){
//       operation();
//     }
//   }

//   console.log(superDigit)
//   return superDigit;
// }
// superDigit(148, 3)