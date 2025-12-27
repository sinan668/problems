// Comparison Operators Examples

let a = 10;
let b = 20;
let c = "10";

console.log("a =", a, "b =", b, "c =", c);

// Equal to (==) → checks value only
console.log("a == c:", a == c); // true

// Not equal to (!=) → checks value only
console.log("a != b:", a != b); // true

// Strict equal (===) → checks value and type
console.log("a === c:", a === c); // false

// Strict not equal (!==) → checks value and type
console.log("a !== c:", a !== c); // true

// Greater than (>)
console.log("a > b:", a > b); // false

// Less than (<)
console.log("a < b:", a < b); // true

// Greater than or equal (>=)
console.log("a >= 10:", a >= 10); // true

// Less than or equal (<=)
console.log("b <= 15:", b <= 15); // false

// Comparison with NaN (special case)
console.log("NaN == NaN:", NaN == NaN); // false
console.log("NaN === NaN:", NaN === NaN); // false

// Using comparison in expressions
console.log("(a + 5) > b:", (a + 5) > b); // false
console.log("(a + 15) >= b:", (a + 15) >= b); // true
