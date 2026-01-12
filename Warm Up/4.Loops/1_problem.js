// Write a function that searches for an element in an array and returns the index, 
// if the element is not present then just return -1

function searchElement(arr, x) {
    // Loop through the array from index 0 to last index
    for(let i=0; i<arr.length; i++){
        // Check if current element matches x
        if(arr[i] == x){
            return i; // Element found → return index
        }
    }
    // If loop finishes and element not found
    return -1;
}

// Array declaration
let arr = [4, 2, 0, 10, 8, 30]

// searchElement(arr, 4) => 0
// searchElement(arr, 10) => 3
// searchElement(arr, 49) => -1

// Function calls
let value = searchElement(arr, 4)
let value1 = searchElement(arr, 10)
let value2 = searchElement(arr, 49)

// Print results
console.log(value) // 0
console.log(value1) // 3
console.log(value2) // -1