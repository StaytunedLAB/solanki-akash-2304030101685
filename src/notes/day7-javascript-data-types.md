# DAY 7: JavaScript Data Types - Complete Guide

## 📚 Overview
JavaScript is a dynamically typed language, which means variables can hold values of any type without explicit type declaration. Understanding data types is fundamental to writing effective JavaScript code.

## 🔢 JavaScript Data Types Categories

JavaScript has **8 fundamental data types**, divided into two categories:

### 1. Primitive Types (7 types)
- String
- Number
- BigInt
- Boolean
- Undefined
- Null
- Symbol

### 2. Reference Type (1 type)
- Object (includes Arrays, Functions, Dates, etc.)

---

## 1️⃣ String

Strings represent textual data enclosed in quotes.

### Syntax:
```javascript
let single = 'Hello';
let double = "World";
let template = `Hello ${single}`;  // Template literals (ES6+)
```

### Key Features:
```javascript
// String length
let text = "JavaScript";
console.log(text.length); // 10

// String methods
console.log(text.toLowerCase()); // "javascript"
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.charAt(0));     // "J"
console.log(text.indexOf('S'));  // 4
console.log(text.slice(0, 4));   // "Java"

// String immutability
text[0] = 'X';  // Won't work! Strings are immutable
console.log(text); // Still "JavaScript"
```

### Template Literals (ES6):
```javascript
let name = "Akash";
let age = 20;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // "My name is Akash and I am 20 years old."

// Multi-line strings
let multiLine = `
  Line 1
  Line 2
  Line 3
`;
```

---

## 2️⃣ Number

JavaScript has only one number type (both integers and floating-point).

### Syntax:
```javascript
let integer = 42;
let decimal = 3.14;
let negative = -100;
let exponential = 2.5e6; // 2.5 × 10^6 = 2500000
```

### Special Numeric Values:
```javascript
console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log("text" / 2);   // NaN (Not a Number)

// Checking for special values
console.log(Number.isNaN(NaN));        // true
console.log(Number.isFinite(100));     // true
console.log(Number.isFinite(Infinity)); // false
```

### Number Methods:
```javascript
let num = 3.14159;

console.log(num.toFixed(2));        // "3.14"
console.log(num.toPrecision(3));    // "3.14"
console.log(parseInt("100"));       // 100
console.log(parseFloat("3.14"));    // 3.14

// Number conversion
console.log(Number("123"));   // 123
console.log(Number("abc"));   // NaN
console.log(Number(true));    // 1
console.log(Number(false));   // 0
```

### Math Operations:
```javascript
console.log(Math.PI);           // 3.141592653589793
console.log(Math.round(4.7));   // 5
console.log(Math.floor(4.7));   // 4
console.log(Math.ceil(4.2));    // 5
console.log(Math.random());     // Random number between 0 and 1
console.log(Math.max(1,5,3));   // 5
console.log(Math.min(1,5,3));   // 1
console.log(Math.pow(2, 3));    // 8
console.log(Math.sqrt(16));     // 4
```

---

## 3️⃣ BigInt

For integers larger than `2^53 - 1` (the largest safe integer).

### Syntax:
```javascript
let bigNum1 = 1234567890123456789012345678901234567890n;
let bigNum2 = BigInt("1234567890123456789012345678901234567890");

console.log(typeof bigNum1); // "bigint"

// Operations
let sum = 10n + 20n;     // 30n
let product = 5n * 2n;   // 10n

// Cannot mix BigInt with Number
// let mixed = 10n + 5;  // Error!
let mixed = 10n + BigInt(5); // Works: 15n
```

---

## 4️⃣ Boolean

Represents logical values: `true` or `false`.

### Syntax:
```javascript
let isActive = true;
let isCompleted = false;

console.log(typeof isActive); // "boolean"
```

### Boolean Conversion:
```javascript
// Falsy values (convert to false):
console.log(Boolean(0));           // false
console.log(Boolean(""));          // false
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));         // false

// Truthy values (convert to true):
console.log(Boolean(1));           // true
console.log(Boolean("hello"));     // true
console.log(Boolean([]));          // true
console.log(Boolean({}));          // true
```

### Logical Operators:
```javascript
let a = true;
let b = false;

console.log(a && b);  // false (AND)
console.log(a || b);  // true  (OR)
console.log(!a);      // false (NOT)
```

---

## 5️⃣ Undefined

A variable that has been declared but not assigned a value.

### Syntax:
```javascript
let x;
console.log(x);           // undefined
console.log(typeof x);    // "undefined"

function test() {
  // no return statement
}
console.log(test());      // undefined

let obj = {};
console.log(obj.prop);    // undefined (property doesn't exist)
```

---

## 6️⃣ Null

Represents the intentional absence of any value.

### Syntax:
```javascript
let emptyValue = null;
console.log(emptyValue);     // null
console.log(typeof null);    // "object" (historical bug in JavaScript!)
```

### Null vs Undefined:
```javascript
let a;           // undefined (not initialized)
let b = null;    // null (explicitly set to no value)

console.log(a == b);   // true  (loose equality)
console.log(a === b);  // false (strict equality - different types)
```

---

## 7️⃣ Symbol

Unique and immutable primitive value (ES6+), often used as object property keys.

### Syntax:
```javascript
let sym1 = Symbol();
let sym2 = Symbol("description");
let sym3 = Symbol("description");

console.log(sym2 === sym3);  // false (each Symbol is unique!)
console.log(typeof sym1);    // "symbol"

// Using Symbols as object keys
let id = Symbol("id");
let user = {
  name: "Akash",
  [id]: 12345
};

console.log(user[id]);       // 12345
console.log(user.id);        // undefined (not the same as Symbol)
```

### Well-Known Symbols:
```javascript
// Symbol.iterator - makes object iterable
let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

---

## 8️⃣ Object

Objects are collections of key-value pairs and the foundation of JavaScript.

### Object Literals:
```javascript
let person = {
  name: "Akash",
  age: 20,
  isStudent: true,
  greet: function() {
    return `Hello, I'm ${this.name}`;
  }
};

console.log(person.name);      // "Akash"
console.log(person['age']);    // 20
console.log(person.greet());   // "Hello, I'm Akash"
```

### Arrays (Special Objects):
```javascript
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);        // "Apple"
console.log(fruits.length);    // 3
console.log(typeof fruits);    // "object"
console.log(Array.isArray(fruits)); // true

// Array methods
fruits.push("Mango");          // Add to end
fruits.pop();                  // Remove from end
fruits.unshift("Grapes");      // Add to beginning
fruits.shift();                // Remove from beginning
```

### Functions (Special Objects):
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(typeof greet);     // "function"
console.log(greet("Akash"));   // "Hello, Akash!"

// Function as object
greet.customProp = "I'm a property!";
console.log(greet.customProp); // "I'm a property!"
```

### Dates:
```javascript
let now = new Date();
console.log(now);                    // Current date and time
console.log(now.getFullYear());      // Current year
console.log(now.getMonth());         // Month (0-11)
console.log(now.getDate());          // Day of month
console.log(now.toISOString());      // ISO format

let specificDate = new Date("2024-01-15");
console.log(specificDate);
```

---

## 🔍 Type Checking

### typeof Operator:
```javascript
console.log(typeof "Hello");         // "string"
console.log(typeof 42);              // "number"
console.log(typeof 123n);            // "bigint"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" (bug!)
console.log(typeof Symbol());        // "symbol"
console.log(typeof {});              // "object"
console.log(typeof []);              // "object"
console.log(typeof function(){});    // "function"
```

### Advanced Type Checking:
```javascript
// Check for null specifically
let value = null;
console.log(value === null); // true

// Check for array
console.log(Array.isArray([]));     // true
console.log(Array.isArray({}));     // false

// Check for NaN
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN("text"));  // false (not NaN, just not a number)

// instanceof for objects
let date = new Date();
console.log(date instanceof Date);   // true
console.log(date instanceof Object); // true
```

---

## 🔄 Type Conversion

### Implicit Conversion (Coercion):
```javascript
// String coercion
console.log("5" + 3);        // "53" (number to string)
console.log("5" - 3);        // 2   (string to number)

// Number coercion
console.log("6" * "2");      // 12
console.log("6" / "2");      // 3

// Boolean coercion
if ("hello") {
  console.log("Truthy!");    // Executes
}
```

### Explicit Conversion:
```javascript
// To String
console.log(String(123));         // "123"
console.log(String(true));        // "true"
console.log((123).toString());    // "123"

// To Number
console.log(Number("123"));       // 123
console.log(Number("12.34"));     // 12.34
console.log(Number("abc"));       // NaN
console.log(parseInt("123px"));   // 123
console.log(parseFloat("12.34")); // 12.34

// To Boolean
console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean("text"));     // true
```

---

## 📊 Comparison of Primitive vs Reference Types

### Primitive Types:
- **Stored by value**
- **Immutable**
- **Compared by value**

```javascript
let a = 10;
let b = a;    // Copy value
b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20

let str1 = "hello";
let str2 = "hello";
console.log(str1 === str2); // true (same value)
```

### Reference Types:
- **Stored by reference**
- **Mutable**
- **Compared by reference**

```javascript
let obj1 = { name: "Akash" };
let obj2 = obj1;  // Copy reference
obj2.name = "Solanki";
console.log(obj1.name); // "Solanki" (changed!)
console.log(obj2.name); // "Solanki"

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (different references)
```

---

## 🎯 Best Practices

1. **Use `const` for values that won't change:**
   ```javascript
   const PI = 3.14159;
   const MAX_USERS = 100;
   ```

2. **Use descriptive variable names:**
   ```javascript
   // Bad
   let x = 20;
   
   // Good
   let userAge = 20;
   ```

3. **Use strict equality (`===`) instead of loose equality (`==`):**
   ```javascript
   console.log(0 == false);   // true (type coercion)
   console.log(0 === false);  // false (different types)
   ```

4. **Check for null/undefined before accessing properties:**
   ```javascript
   let user = null;
   
   // Bad
   // console.log(user.name); // Error!
   
   // Good
   console.log(user?.name);  // undefined (optional chaining)
   ```

5. **Use appropriate data types:**
   ```javascript
   // Use Number for calculations
   let price = 99.99;
   
   // Use String for text
   let productName = "Laptop";
   
   // Use Boolean for flags
   let isAvailable = true;
   ```

---

## 🧪 Practice Examples

### Example 1: Type Detection Function
```javascript
function detectType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

console.log(detectType(42));           // "number"
console.log(detectType("hello"));      // "string"
console.log(detectType(null));         // "null"
console.log(detectType([]));           // "array"
console.log(detectType({}));           // "object"
```

### Example 2: Safe Type Conversion
```javascript
function toNumber(value) {
  const num = Number(value);
  return Number.isNaN(num) ? 0 : num;
}

console.log(toNumber("123"));   // 123
console.log(toNumber("abc"));   // 0
console.log(toNumber(true));    // 1
```

### Example 3: Deep vs Shallow Copy
```javascript
// Shallow copy
let original = { name: "Akash", skills: ["JS", "React"] };
let shallowCopy = { ...original };

shallowCopy.skills.push("Node");
console.log(original.skills); // ["JS", "React", "Node"] (modified!)

// Deep copy (Note: JSON method has limitations - doesn't work with functions, undefined, symbols, or circular references)
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.skills.push("Python");
console.log(original.skills); // ["JS", "React", "Node"] (unchanged)
```

---

## 📝 Summary

JavaScript's 8 data types provide the foundation for all programming in the language:

**Primitive Types:**
- **String**: Text data
- **Number**: Numeric values
- **BigInt**: Large integers
- **Boolean**: True/false values
- **Undefined**: Uninitialized variables
- **Null**: Intentional absence of value
- **Symbol**: Unique identifiers

**Reference Type:**
- **Object**: Collections and complex structures (including Arrays, Functions, Dates, etc.)

Understanding these data types and their behaviors is crucial for:
- Writing bug-free code
- Avoiding type-related errors
- Making efficient type conversions
- Choosing the right data structure

---

**Day 7 Learning Completed! 🎉**

*Key Takeaway:* JavaScript's dynamic typing gives you flexibility, but understanding data types deeply helps you write more reliable and maintainable code.
