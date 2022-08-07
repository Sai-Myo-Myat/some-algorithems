//lonely integer
function lonelyinteger(a) {
  // Write your code here
  const lonelyInt = a.filter(int => {
    return a.indexOf(int) === a.lastIndexOf(int);
  })
  return lonelyInt[0];
}