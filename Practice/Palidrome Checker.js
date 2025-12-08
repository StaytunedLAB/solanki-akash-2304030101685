let str = prompt("Enter a string:");

let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
