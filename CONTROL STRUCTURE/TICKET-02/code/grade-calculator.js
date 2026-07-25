//Ticket-02: Grade Calculator

let studentGrade = 70; // You can change this value to test different grades
if(studentGrade >= 90 && studentGrade <= 100){
    console.log(`Score: ${studentGrade} - Grade: A`);
}
if(studentGrade >= 80 && studentGrade < 90){
    console.log(`Score: ${studentGrade} - Grade: B`);
}
if(studentGrade >= 70 && studentGrade < 80){
    console.log(`Score: ${studentGrade} - Grade: C`);
}
if(studentGrade >= 60 && studentGrade < 70){
    console.log(`Score: ${studentGrade} - Grade: D`);
}
if(studentGrade < 60){
    console.log(`Score: ${studentGrade} - Grade: F`);
}
