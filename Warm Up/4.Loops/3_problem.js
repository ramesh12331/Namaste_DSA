// Write a function that returns the largest number in an array

function findLargest(arr){
    // let largest = -1;
    // let largest = -Infinity;

    // Best approach:
    // Initialize largest with the first element of the array
    let largest = arr[0]

     // Loop through the array
    for(let i=0; i<arr.length; i++){

         // If current element is greater than largest
        if(arr[i]>largest){
            largest = arr[i];  // Update largest
        }
    }
    // Return the largest number found
    return largest
}

// let arr = [5, 0, 7, 10, 8, 17, 1];

// Example array (all negative numbers)
let arr = [-19, -7, -3];

// Call the function
let result = findLargest(arr);
console.log(result)