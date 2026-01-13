// function Reverse(n){
    

//     let rev=0;
//     let original = n; // save original number
//     n = Math.abs(original)
//     while(n>0){
//         let rem = n%10;
//         rev = (rev*10) + rem;
//         n = Math.floor(n/10);
//     }
//     if(rev === original){
//         return -rev;
//     }else{
//         return rev;
//     }
// }

// let num = 1234;

// let result = Reverse(num);

// console.log(result)

// ****************************

// Function to reverse a number
function Reverse(n) {

    // Variable to store the reversed number
    let rev = 0;

    // Store the original number (before modifying it)
    let original = n;

    // Store the sign of the number
    // If n is negative → sign = -1, otherwise sign = 1
    let sign = n < 0 ? -1 : 1;

    // Convert number to positive for easy digit extraction
    n = Math.abs(original);

    // Loop until all digits are processed
    while (n > 0) {

        // Get the last digit of the number
        let rem = n % 10;

        // Add the digit to the reversed number
        rev = (rev * 10) + rem;

        // Remove the last digit from n
        n = Math.floor(n / 10);
    }

    // Restore the original sign and return the result
    return rev * sign;
}

// Example input
let num = 1234;

// Function call
let result = Reverse(num);

// Print the reversed number
console.log(result); // Output: 4321
