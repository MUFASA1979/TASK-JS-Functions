/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}
greet("Hamza")

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
    if(n % 2){
    return true;}
    return false;
    // return n%2; 
    // (you can use this way also)
}
    console.log(isOdd(5));
    // console.log(isOdd(80));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
// function oddsSmallerThan(n) {
//   // Your code here
function oddsSmallerThan (n){
  return parseInt (n / 2);
}
  console.log (oddsSmallerThan(22));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (isOdd(n)){
    return n*n;
 }
    return n*2
}
    console.log (squareOrDouble (3));