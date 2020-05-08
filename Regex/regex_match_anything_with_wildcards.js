// Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

// The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

// You should use the .test() method.
// Passed
// You should use the wildcard character in your regex unRegex
// Passed
// Your regex unRegex should match "run" in "Let us go on a run."
// Passed
// Your regex unRegex should match "sun" in "The sun is out today."
// Passed
// Your regex unRegex should match "fun" in "Coding is a lot of fun."
// Passed
// Your regex unRegex should match "pun" in "Seven days without a pun makes one weak."
// Passed
// Your regex unRegex should match "nun" in "One takes a vow to be a nun."
// Passed
// Your regex unRegex should match "bun" in "She got fired from the hot dog stand for putting her hair in a bun."
// Passed
// Your regex unRegex should not match "There is a bug in my code."
// Passed
// Your regex unRegex should not match "Catch me if you can."
