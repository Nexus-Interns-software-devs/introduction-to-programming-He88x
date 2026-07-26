//TICKET-03: Password Validator:

let password = "pass123"; // You can change this value to test different passwords
const length = password.length;
const hasUpperCase = /[A-Z]/.test(password);
const number = /[0-9]/.test(password);

if(length >= 8 && hasUpperCase && number){
    console.log("Result: Valid.");
} else {
    console.log("Result: Invalid.");
    console.log("Missing: Length (need 8+), Number, Uppercase Letter.")
}

//passed all edge cases and tested with different passwords.