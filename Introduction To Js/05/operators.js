
// Arithmetic Operators
let add = 5 + 2;        // 7
let sub = 5 - 2;        // 3
let mul = 5 * 2;        // 10
let div = 5 / 2;        // 2.5
let mod = 5 % 2;        // 1


let exponent = 3 ** 5

console.log(exponent)


let inc = 5; 
inc++;                  // 6
let dec = 5; 
dec--;                  // 4

// Assignment Operators
let x = 10;


x += 5  // x = x + 5

x = x + 5
x -= 5;  // x = x - 5
x *= 5;  // x = x * 5
x /= 5;  // x = x / 5
x %= 5;  // x = x % 5
x **= 5; // x = x ** 5

// Comparison Operators
let eq = (5 == 5);          // true
let neq = (5 != 5);         // false
let seq = (5 === 5);        // true
let sneq = (5 !== 5);       // false
let gt = (5 > 2);           // true
let lt = (5 < 2);           // false
let gte = (5 >= 2);         // true
let lte = (5 <= 2);         // false

// Logical Operators
let and = (true && false);  // false
let or = (true || false);   // true
let not = !true;            // false


// Bitwise Operators
let band = 5 & 1;           // 1
let bor = 5 | 1;            // 5
let bxor = 5 ^ 1;           // 4
let bnot = ~5;              // -6
let lshift = 5 << 1;        // 10
let rshift = 5 >> 1;        // 2
let zfrshift = 5 >>> 1;     // 2

// String Operators
let t1 = "Hello";
let t2 = "World";
let t3 = t1 + " " + t2;     // "Hello World"

// Conditional (Ternary) Operator
let age = 20;
let vote = (age >= 18) ? "Yes" : "No"; // "Yes"

// Type Operators
let typeNum = typeof 5;           // "number"
let typeStr = typeof "Hello";     // "string"
let isArray = [] instanceof Array; // true