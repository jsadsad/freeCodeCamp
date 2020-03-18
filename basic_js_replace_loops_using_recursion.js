// Recursion is the concept that a function can be expressed in terms of itself.

// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

function multiply(arr, n) {
  if (n <= 0) {
    return 1
  } else {
    return multiply(arr, n - 1) * arr[n - 1]
  }
}

function sum(arr, n) {
  if (n <= 0) {
    return 0
  } else {
    return sum(arr, n - 1) + arr[n-1]
  }
}
