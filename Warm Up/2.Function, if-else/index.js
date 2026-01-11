// Function that prints "Hello World" on the console
function printHelloWorld(){
    console.log("Hello World");
}

// Calling the function
printHelloWorld()

// **************** GREETING FUNCTION ****************

// Function that takes a name as a parameter
function greet(name){
    // Prints a greeting message with the given name
    console.log("Namaste "+ name);
}

// Storing a name in a variable
let x = "Virat Kohli"

// Calling the function with different arguments
greet("Akshay");
greet("Deepika");
greet(x);

// *************** ADD TWO VALUES ****************

// Function that takes two numbers and prints their sum
function sum(a,b){
    let add = a + b; // Adds the two values
    console.log(add); // Prints the result
}

// Variables with numeric values
let a = 10;
let b = 20;
let c = 30;

// Calling the function with direct values
sum(7,3)
// Calling the function using variables
sum(a,c)

// *************** FUNCTION WITH RETURN VALUE ****************

// Function that calculates and returns the square of a number
function square(x) {
    let result = x*x; // Multiply x by itself
    return result; // Return the result
}

// Storing returned value in a variable
let value = square(2);
console.log(value) // Output: 4

// Another function call
let z = square(99);
console.log(z);