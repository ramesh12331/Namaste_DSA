// let n = 4; // Number of rows

// for (let i = 0; i < n; i++) {

//     // Start each row with an empty space/string
//     let row = " ";

//     // Inner loop runs from 0 to i
//     // Number of stars depends on row number
//     for (let j = 0; j <= i; j++) {

//         // Add one star in each iteration
//         row = row + " * ";
//     }

//     // Print the completed row
//     console.log(row);
// }


// *****************OR**********************

let n = 4; // Number of rows

for (let i = 0; i < n; i++) {

    // Start each row with an empty space/string
    let row = " ";

    // Inner loop runs from 0 to i
    // Number of stars depends on row number
    for (let j = 0; j < i+1; j++) {

        // Add one star in each iteration
        row = row + " * ";
    }

    // Print the completed row
    console.log(row);
}



// Equivalent forms:

// j <= i        // works
// j < i + 1     // works