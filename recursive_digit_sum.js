//recursive_digit_sum
//it's not a good approach, and not convenience if input is too large, it's will be abort called err. I'm gonna update later...


// function superDigit(n, k) {
//   // Write your code here
//   console.log("here")
//   let sum = 0;

//   const recurse = (n) => {
//     if(n.length === 1 ) {
//       console.log(n)
//       return n;
//     }
//     const integers = n.toString().split("")
//     sum = integers.map(integer => sum += integer);
//     return recurse(sum)
//   }
//   console.log(n)
//   return recurse(n)
    
// }
// superDigit(148,3)

const findSum = (num,k) => {
  if(num < 10){
     return num;
  }
  const lastDigit = num % 10;
  const remainingNum = Math.floor(num / 10);
  return findSum(lastDigit + findSum(remainingNum));
}
console.log(findSum(2568));

findSum(8,findSum(7,findSum(6,3)))


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