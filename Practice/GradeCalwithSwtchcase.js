let marks = parseInt(prompt("Enter your marks:"));

switch (Math.floor(marks / 10)) {
    case 10:
    case 9:
        console.log("Grade: A");
        break;
    case 8:
        console.log("Grade: B");
        break;
    case 7:
        console.log("Grade: C");
        break;
    case 6:
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: Fail");
}
