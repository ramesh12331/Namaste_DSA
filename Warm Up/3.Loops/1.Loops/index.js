// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

// for loop

for(let i=0; i<=10; i++){
    console.log("Hello World " + i)
}

// *******************

for(let i=3; i<=5; i++){
    console.log("Namaste Dev " + i);
}

// *******WRONG********

// for(let i=0; i<10 ; i+1){
//     console.log(i+1)
// }

// *******RIGHT********

for(let i=0; i<10 ; i=i+1){
    console.log(i+1)
}

// ****************

for(let i=2; i<9; i=i+2){
    console.log("HTML " +i )
}

// ****************

for(i=5; i>0; i=i-1){
    console.log("Apple " + i);
}

// *************
 for(i=5; i<4; i++){
    console.log("Nothing Print")
 }

//  *****Infinity Loop*******
// for(i=1; i>0; i++){
//     console.log("Infinity Loop " + i)
// }

// ******function in loop********
function greet(i){
    console.log("Namaste! "+i)
}

for(let i=0; i<10; i++){
    greet(i)
}

// **********Array of Loop******************

let arr = [10, 6, 2, 4, 8, 12, 9, 6]

let length = arr.length
// console.log(length)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// Print all the even numbers in the array

let array = [10, 6, 2, 0, 8, 3, 80];

for(let i=0; i<array.length; i++){
    if(array[i]%2 == 0){
        console.log(array[i])
    }
}

// Print all the odd numbers in the array

let arrays = [10, 6, 2, 0, 8, 3, 80];

for(let i=0; i<arrays.length; i++){
    if(array[i]%2 == 1){
        console.log(arrays[i])
    }
}