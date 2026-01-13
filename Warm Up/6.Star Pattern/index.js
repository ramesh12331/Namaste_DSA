// ****** GRID PATTERN *******

let n = 4; // Size of the grid (rows and columns)

for (let i = 0; i < n; i++) {

    // Start with an empty string for each row
    let row = "";

    // Inner loop builds one full row
    for (let j = 0; j < n; j++) {

        // Add one star to the row
        row = row + " * ";
    }

    // Print the completed row
    console.log(row);
}





