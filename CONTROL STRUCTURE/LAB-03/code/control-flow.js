//Question1: Simple If/Else:
//Check if a number is positive or negative

let number = -10;
if(number > 0){
    console.log(`The number ${number} is positive`);
}
else{
    console.log(`The number ${number} is negative`);
} //The answer will be "The number is negative" since the value of number is -10 which is less than 0

//Checking if a number is positive
let number2 = 10;
if(number2 > 0){
    console.log(`The number ${number2} is positive`);
}
else{
    console.log(`The number ${number2} is negative`);
}

//Question2: Multiple Conditions (else if)
let studentScore = 90;
if(studentScore >= 90){
    console.log(`Score: ${studentScore}, Grade: A`);
}
else if(studentScore >= 80){
    console.log(`Score: ${studentScore}, Grade: B`);
}
else if (studentScore >= 70){
    console.log(`Score: ${studentScore}, Grade: C`);
}
else if (studentScore >= 60){
    console.log(`Score: ${studentScore}, Grade: D`);
}
else{
    console.log(`Score: ${studentScore}, Grade: F`);
}

//Question3: Nested Conditions:
let age = 25;
let isRegistered = true;
if(age >= 25){
    console.log(`You are eligible to vote.`);
    if(isRegistered){
        console.log(`You are registered to vote.`);
    }
}