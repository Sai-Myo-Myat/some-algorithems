//recursive_digit_sum

function superDigit(n, k) {
  // Write your code here
  let sum = 0;
  const numArr = n.toString().split('');
  numArr.map(num => {
    sum += parseInt(num);
  })
  sum *= k;
  //this part(resucre fun) is referenced from tutorialspoint.com
  const recurse = (number) => {
    if(number < 10) {
      return number;
    }
    const lastNum = Math.floor(number % 10);
    const remainingNum = Math.floor(number / 10);
    return recurse(lastNum + recurse(remainingNum))
  } 
  const ans = recurse(sum)
  console.log(ans)
  return ans;
}
superDigit(148,3)


//-- my first approach 
//it's not a good one, and not convenience if input is too large, it will be abort called err. I'm gonna update later...


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