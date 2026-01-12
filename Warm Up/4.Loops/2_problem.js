// Function that counts how many negative numbers are in an array
function countNegatives(arr) {

    // Variable to store count of negative numbers
    let count = 0;

    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {

        // Check if the current element is negative
        if (arr[i] < 0) {
            // Increase count when a negative number is found
            // count++
            count = count + 1;
        }
    }

    // Return total count of negative numbers
    return count;
}

// Array containing positive, negative, and zero values
let arr = [2, -9, 17, 0, -1, -10, -4, 8];

// Call the function
const results = countNegatives(arr);

// Print the result
console.log(results); // Output: 4
