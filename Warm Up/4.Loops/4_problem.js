// Find Second Largest number in Array

// Function to find the second largest number in an array
function secondLargest(arr) {

    // Store the largest number found so far
    let FirstLargest = -Infinity;

    // Store the second largest number found so far
    let secondLargest = -Infinity;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {

        // If current element is greater than the largest
        if (arr[i] > FirstLargest) {

            // Old largest becomes second largest
            secondLargest = FirstLargest;

            // Update largest
            FirstLargest = arr[i];
        }
        // If current element is less than FirstLargest
        // but greater than secondLargest
        else if (arr[i] > secondLargest && arr[i] != FirstLargest) {
            secondLargest = arr[i];
        }
    }

    // Return second largest number
    return secondLargest;
}


let arr = [4, 9,9, 0, 2, 8, 7, 1];

const result = secondLargest(arr);
console.log(result)