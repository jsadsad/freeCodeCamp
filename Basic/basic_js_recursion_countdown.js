// The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

function countdown(n){
  if (n < 1)  {
    return []
  } else {
    return [n, ...countdown(n - 1)]
  }
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]
