// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
//
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
//
// For example, to match lowercase letters a through e you would use [a-e].

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

// Your regex alphabetRegex should match 35 items.
// (35) ["T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", "y", "d", "o", "g"]
// Passed
// Your regex alphabetRegex should use the global flag.
// Passed
// Your regex alphabetRegex should use the case insensitive flag.
