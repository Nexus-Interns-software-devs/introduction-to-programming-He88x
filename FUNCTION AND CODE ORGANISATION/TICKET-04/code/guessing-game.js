// Setup
const secretNumber = 42; // any number from 1-100

// Function
function checkGuess(guess) {
  if (guess > secretNumber) {
    return "Too high";
  } else if (guess < secretNumber) {
    return "Too low";
  } else {
    return "Correct!";
  }
}

// Testing
const testGuesses = [70, 10, 50, 42]; // higher, lower, higher, correct

testGuesses.forEach(guess => {
  console.log(`Guess: ${guess}: ${checkGuess(guess)}`);
});
// Test the function
console.log(checkGuess(50));
console.log(checkGuess(30));
console.log(checkGuess(42));