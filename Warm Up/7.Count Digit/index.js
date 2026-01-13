// Write a function that returns the count of digits in a number
function countDigits(n){

    // If number is 0, it has exactly 1 digit
    if (n === 0) return 1;

    // Convert negative numbers to positive
    n = Math.abs(n);

    let count = 0;

    // Loop until number becomes 0
    while (n > 0) {
        n = Math.floor(n / 10); // Remove last digit
        count++;                // Increase digit count
    }

    return count;
}

let num = -25899;

let results = countDigits(num);
console.log(results); // Output: 5
