// Basic JavaScript: Use Multiple Conditional (Ternary) OperatorsPassed
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators

function checkSign(num) {
    return num > 0 ? "positive" : (num === 0) ? "zero" : "negative"
}

console.log(checkSign(10));
