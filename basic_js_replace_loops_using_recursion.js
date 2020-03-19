// Recursion is the concept that a function can be expressed in terms of itself.

// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

let testArr = [1,2,3]

function multiply(arr, n) {
  if (n <= 0) {
    return 1
  } else {
    return multiply(arr, n - 1) * arr[n - 1]
  }
}

console.log(multiply(testArr, 3)) // [6]

function sum(arr, n) {
  if (n <= 0) {
    return 0
  } else {
    return sum(arr, n - 1) + arr[n-1]
  }
}

console.log(sum(testArr, 3)) // [6]
