/**
 * Simple Calculator
 * Supports basic operations, memory, and history.
 */

// =====================
// Core Operations
// =====================

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  const result = a + b;
  addToHistory(`${a} + ${b}`, result);
  return result;
}

/**
 * Subtracts two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  const result = a - b;
  addToHistory(`${a} - ${b}`, result);
  return result;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  const result = a * b;
  addToHistory(`${a} * ${b}`, result);
  return result;
}

/**
 * Divides two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 */
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }

  const result = a / b;
  addToHistory(`${a} / ${b}`, result);
  return result;
}

/**
 * Raises a number to a power.
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
  const result = base ** exponent;
  addToHistory(`${base} ^ ${exponent}`, result);
  return result;
}

/**
 * Finds the square root.
 * @param {number} number
 * @returns {number|string}
 */
function squareRoot(number) {
  if (number < 0) {
    return "Error: Negative number";
  }

  const result = Math.sqrt(number);
  addToHistory(`√${number}`, result);
  return result;
}

// =====================
// Memory
// =====================

let memory = 0;

/**
 * Stores a value in memory.
 * @param {number} value
 */
function storeMemory(value) {
  memory = value;
}

/**
 * Recalls the stored value.
 * @returns {number}
 */
function recallMemory() {
  return memory;
}

/**
 * Clears the memory.
 */
function clearMemory() {
  memory = 0;
}

// =====================
// History
// =====================

const history = [];

/**
 * Adds an operation to history.
 * Keeps only the last 10 operations.
 * @param {string} operation
 * @param {number} result
 */
function addToHistory(operation, result) {
  history.push(`${operation} = ${result}`);

  if (history.length > 10) {
    history.shift();
  }
}

/**
 * Displays calculation history.
 */
function displayHistory() {
  console.log("Calculation History:");
  history.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

/**
 * Clears history.
 */
function clearHistory() {
  history.length = 0;
}

// =====================
// Example Usage
// =====================

console.log(add(5, 3));          // 8
console.log(subtract(10, 4));    // 6
console.log(multiply(6, 7));     // 42
console.log(divide(20, 5));      // 4
console.log(power(2, 5));        // 32
console.log(squareRoot(81));     // 9

storeMemory(42);
console.log("Memory:", recallMemory());

clearMemory();
console.log("Memory after clear:", recallMemory());

displayHistory();

clearHistory();
displayHistory();