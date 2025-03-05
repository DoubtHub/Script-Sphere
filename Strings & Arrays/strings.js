// Creating strings
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;

// String concatenation
let greeting = 'Hello';
let name = 'Alice';
let concatenatedString = greeting + ', ' + name + '!'; // "Hello, Alice!"


// Accessing characters in a string
let charAtIndex = greeting.charAt(1); // "e"
let charAtIndexUsingBracket = greeting[1]; // "e"

// String length
let stringLength = greeting.length; // 5

// Converting case
let upperCaseString = greeting.toUpperCase(); // "HELLO"
let lowerCaseString = greeting.toLowerCase(); // "hello"

// Trimming whitespace
let stringWithWhitespace = '   Hello, World!   ';
let trimmedString = stringWithWhitespace.trim(); // "Hello, World!"

// Finding a substring
let phrase = 'The quick brown fox jumps over the lazy dog';
let indexOfQuick = phrase.indexOf('quick'); // 4
let lastIndexOfThe = phrase.lastIndexOf('the'); // 31

// Checking if a string contains a substring
let containsQuick = phrase.includes('quick'); // true

// Extracting a substring
let substring = phrase.substring(4, 9); // "quick"
let slice = phrase.slice(4, 9); // "quick"

// Splitting a string into an array
let words = phrase.split(' '); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

// Replacing a substring
let newPhrase = phrase.replace('dog', 'cat'); // "The quick brown fox jumps over the lazy cat"