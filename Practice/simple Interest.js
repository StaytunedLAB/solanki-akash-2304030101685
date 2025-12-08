let p = parseFloat(prompt("Enter Principal:"));
let r = parseFloat(prompt("Enter Rate:"));
let t = parseFloat(prompt("Enter Time in years:"));

let simpleInterest = (p * r * t) / 100;
console.log("Simple Interest:", simpleInterest);

let compoundInterest = p * Math.pow((1 + r / 100), t) - p;
console.log("Compound Interest:", compoundInterest);
