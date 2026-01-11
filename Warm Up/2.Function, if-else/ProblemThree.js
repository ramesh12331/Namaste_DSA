// Create a function to check if a number is Even or Odd
function isEvenOdd(num) {

    // Find the remainder when the number is divided by 2
    let rem = num % 2;

    // If remainder is 0, the number is Even
    if (rem == 0) {
        console.log("Even Number");
    } else {
        // If remainder is not 0, the number is Odd
        console.log("Odd Number");
    }
}

// Function calls with different numbers
isEvenOdd(6);   // Output: Even Number
isEvenOdd(3);   // Output: Odd Number
isEvenOdd(10);  // Output: Even Number


// Summery

// ✅ Key Points
// % (modulus operator) gives the remainder
// Even numbers → remainder 0
// Odd numbers → remainder 1
// if–else is used for decision making

// *********************************************

// 💡 Optional Improved Version (Cleaner):

// function isEvenOdd(num) {
//     console.log(num % 2 === 0 ? "Even Number" : "Odd Number");
// }