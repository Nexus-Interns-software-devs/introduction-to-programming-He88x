# LAB 06: Bug Hunt Challenge – Bug Fixes

## Bug #1: Syntax Error

### Error Type
Syntax Error

### Problem Explanation
The function is missing a closing `}` brace, causing JavaScript to throw a syntax error.

### Fixed Code
```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Alice");
```

### How I Debugged It
- Read the error message.
- Checked the function for missing brackets.
- Added the missing closing brace.

---

## Bug #2: Off-by-One Error

### Error Type
Runtime Error (Array Index Out of Bounds)

### Problem Explanation
The loop runs 10 times, but the array only has 5 elements. Accessing indexes 5–9 returns `undefined`.

### Fixed Code
```javascript
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

### How I Debugged It
- Noticed `undefined` values in the output.
- Compared the loop limit with the array length.
- Changed the loop condition to `numbers.length`.

---

## Bug #3: Logical Error

### Error Type
Logical Error

### Problem Explanation
The function checks if the remainder is `1`, which identifies odd numbers instead of even numbers.

### Fixed Code
```javascript
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(4));
```

### How I Debugged It
- Tested the function with known even numbers.
- Realized the condition was incorrect.
- Changed `1` to `0`.

---

## Bug #4: Type Conversion

### Error Type
Logical Error (Type Conversion)

### Problem Explanation
`userInput` is a string, so using `+` performs string concatenation instead of numeric addition.

### Fixed Code
```javascript
const userInput = "5";
const result = Number(userInput) + 10;

console.log(result);
```

### How I Debugged It
- Checked the data type of `userInput`.
- Converted the string to a number using `Number()`.
- Verified the result was `15`.

---

## Bug #5: Undefined Property

### Error Type
Runtime/Logical Error

### Problem Explanation
An empty array has no first or last element, so both values become `undefined`.

### Fixed Code
```javascript
function getFirstAndLast(items) {
  if (items.length === 0) {
    return {
      first: null,
      last: null
    };
  }

  const first = items[0];
  const last = items[items.length - 1];

  return { first, last };
}

const result = getFirstAndLast([]);
console.log(result);
```

### How I Debugged It
- Tested the function with an empty array.
- Identified that no elements existed.
- Added a check for an empty array before accessing its elements.