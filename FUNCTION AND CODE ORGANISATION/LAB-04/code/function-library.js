/**
 * Utility Function Library
 * Contains reusable string, math, array, and validation functions.
 */

// ==========================
// String Functions
// ==========================

/**
 * Reverse a string.
 * @param {string} text - Input string.
 * @returns {string} Reversed string.
 * @example
 * reverseString("hello"); // "olleh"
 */
function reverseString(text) {
  return text.split("").reverse().join("");
}

/**
 * Count words in a string.
 * @param {string} text - Input text.
 * @returns {number} Number of words.
 * @example
 * countWords("Hello world"); // 2
 */
function countWords(text) {
  return text.trim().split(/\s+/).length;
}

/**
 * Check if a string is a palindrome.
 * @param {string} text - Input string.
 * @returns {boolean} True if palindrome.
 * @example
 * isPalindrome("madam"); // true
 */
function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// ==========================
// Math Functions
// ==========================

/**
 * Check if a number is prime.
 * @param {number} n - Number to check.
 * @returns {boolean} True if prime.
 * @example
 * isPrime(7); // true
 */
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

/**
 * Calculate the factorial of a number.
 * @param {number} n - Input number.
 * @returns {number} Factorial.
 * @example
 * factorial(5); // 120
 */
function factorial(n) {
  if (n < 0) return null;

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

/**
 * Return the nth Fibonacci number.
 * @param {number} n - Position.
 * @returns {number} Fibonacci number.
 * @example
 * fibonacci(6); // 8
 */
function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

// ==========================
// Array Functions
// ==========================

/**
 * Remove duplicate values from an array.
 * @param {Array} arr - Input array.
 * @returns {Array} Array without duplicates.
 * @example
 * removeDuplicates([1,2,2,3]); // [1,2,3]
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * Find the median of an array of numbers.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} Median value.
 * @example
 * findMedian([1,2,3,4,5]); // 3
 */
function findMedian(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

// ==========================
// Validation Functions
// ==========================

/**
 * Validate an email address.
 * @param {string} email - Email address.
 * @returns {boolean} True if valid.
 * @example
 * isValidEmail("test@example.com"); // true
 */
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

/**
 * Validate a phone number.
 * @param {string} phone - Phone number.
 * @returns {boolean} True if valid.
 * @example
 * isValidPhone("08012345678"); // true
 */
function isValidPhone(phone) {
  const pattern = /^[0-9]{10,15}$/;
  return pattern.test(phone);
}

// ==========================
// Tests
// ==========================

console.log(reverseString("hello"));
console.log(countWords("JavaScript is awesome"));
console.log(isPalindrome("madam"));

console.log(isPrime(17));
console.log(factorial(5));
console.log(fibonacci(8));

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
console.log(findMedian([1, 3, 5, 7, 9]));

console.log(isValidEmail("user@example.com"));
console.log(isValidPhone("08012345678"));